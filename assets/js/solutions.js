function assignSolutionScore(desc, solu, base_score = 0) {
    console.log("Executing assignSolutionScore ...\ndesc: " + desc + "\nsolu: " + JSON.stringify(solu) + "\nbase_score: " + base_score);
    var score = base_score;
    for (var i = 0; i < solu.tags.length; i++) {
        if (desc.toLowerCase().includes(solu.tags[i].toLowerCase())) {
            score += 5;
            console.log("Tag matched: " + solu.tags[i] + ", increasing score by 5");
        }
    }
    console.debug({score})
    return score;
}
function showSolutionDetails(key) {
    event.preventDefault();
    console.log("Executing showSolutionDetails ...\nkey: " + key);

    var solutionIndex = document.getElementById('solution' + key);
    console.log({solutionIndex});
    if (solutionIndex.style.display === 'block') {
        solutionIndex.style.display = 'none';
    } else {
        solutionIndex.style.display = 'block';
    }
}
function showHideSolutions() {
    event.preventDefault();
    console.log("Executing showHideSolutions ...");
    if (document.getElementById('solutions-box').style.display === 'block') {
        console.log("Emptying and hiding solutions-box");
        document.getElementById('solutions-box').innerHTML = '';
        document.getElementById('solutions-box').style.display = 'none';
    } else {
        console.log("Checking for solutions and showing solutions-box");
        if (lookForSolutions()) {
            document.getElementById('solutions-box').style.display = 'block';
        }
    }
}
function lookForSolutions() {
    console.log("Executing lookForSolutions ...");
    var solutions_box = document.getElementById('solutions-box');
    var scored_solutions = findAndScoreSolutions();
    var solutions_base_path = 'assets/data/reference/solutions/';
    if (scored_solutions) {
        console.log("Solutions found, displaying in solutions-box");
        var solutions_box = document.getElementById('solutions-box');
        scored_solutions = Object.entries(scored_solutions).sort((a, b) => b[1].score - a[1].score);
        console.log({scored_solutions});
        for (var i = 0; i < scored_solutions.length; i++) {
            var key = scored_solutions[i][0];
            console.log({key});
            var solution = scored_solutions[i][1];
            var template = `
            <div class="solution-card">
                <div class="solution-header">
                    <h1><a href="" onclick="showSolutionDetails('${key}')">${solution.title}</a></h1>
                    <div class="scorevalue">(Score: ${solution.score})</div>
                </div>
                <div class="solution-details" id="solution${key}">
                    <div class="solution-problem">
                        <h2>Problem:</h2>
                        <div id="solution-problem-${key}"></div>
                    </div>
                    <div class="solution-solution">
                        <h2>Solution:</h2>
                        <div id="solution-solution-${key}"></div>
                    </div>
                    <div class="solution-tags">
                        <h2>Tags:</h2>
                        [${solution.tags.join('], [')}]
                    </div>
                    <div class="solution-references">
                        <h2>References:</h2>
                        <ul>
                            ${solution.references.map(ref => `<li><strong><a href="${ref.url}" target="_blank">${ref.title}</a></strong> (Source: ${ref.src})</li>`).join(' ')}
                        </ul>
                    </div>
                </div>
            </div>`;
            solutions_box.innerHTML += template;
            
        }
        var qparam = Date.now();
        for (var n = 0; n < scored_solutions.length; n++) {
            var elements_id = scored_solutions[n][0];
            var solution_data = scored_solutions[n][1];
            console.log(`Updating #solution-problem-${elements_id} with ${solutions_base_path}${solution_data.problem_description}?q=${qparam}`);
            try {
                $(`#solution-problem-${elements_id}`).load(solutions_base_path + solution_data.problem_description + '?q=' + qparam);
            } catch (e) {
                console.error(`Could not load ${solutions_base_path}${solution_data.problem_description} into #solution-problem-${elements_id}: ${e}`);
            }
            console.log(`Updating #solution-solution-${elements_id} with ${solutions_base_path}${solution_data.solution_description}?q=${qparam}`);
            try {
                $(`#solution-solution-${elements_id}`).load(solutions_base_path + solution_data.solution_description + '?q=' + qparam);
            } catch (e2) {
                console.error(`Could not load ${solutions_base_path}${solution_data.solution_description} into #solution-solution-${elements_id}: ${e2}`);
            }
        }

        return true;
    } else {
        console.log("No solutions found for the given description, instrument, and/or model");
        updateSystemBox('No solutions found');
        return false;
    }
}

function findAndScoreSolutions() {
    console.log("Executing findAndScoreSolutions ...");
    var description = document.getElementById('description').value;
    var instr = document.getElementById('instrument').value;
    var model = document.getElementById('model').value;
    var sol = new generateSolutions();
    var potential_solutions = {};
    var score_threshold = so.Settings.ui.solutions_score_threshold.value;
    console.log({score_threshold});
    for (var key in sol.solutions) {
        var base_scr = 0;
        var final_score = 0;
        if (sol.solutions[key].instruments.includes(instr)) {
            base_scr += 10;
        }
        if (sol.solutions[key].models.includes(model)) {
            base_scr += 20;
        }
        if (document.getElementById('device-software-version').value !== '') {
            var input_version = document.getElementById('device-software-version').value;
            var version_components = input_version.split('.');
            if (version_components.length >= 3) {
                base_scr += (sol.solutions[key].software_versions.includes(version_components.slice(0, 3).join('.')) ? 10 : 0);
            } else if (version_components.length < 3) {
                const search_pattern = new RegExp(`${input_version}`);
                base_scr += (sol.solutions[key].software_versions.some(e => search_pattern.test(e)) ? 5 : 0);
            }
        }
        final_score = assignSolutionScore(description, sol.solutions[key], base_scr);
        if (final_score > score_threshold) {
            potential_solutions[key] = {
                "title": sol.solutions[key].title,
                "score": final_score,
                "tags": sol.solutions[key].tags,
                "problem_description": sol.solutions[key].problem_description,
                "solution_description": sol.solutions[key].solution_description,
                "references": sol.solutions[key].references
            };
        }
    }
    if (Object.keys(potential_solutions).length > 0) {
        console.log("Potential solutions found: " + Object.keys(potential_solutions).length);
        return potential_solutions;
    } else {
        return false;
    }
}
function generateSolutions(context = '') {
    console.log("Executing generateSolutions ...\ncontext: " + context);
    this.solutions = {
        /*
        "ID": { // 5 digits, zero-padded. These are arbitrary and can be modified to organize the solution entries
            "title": "title", // Brief but distinctive, ideally specific to the error message
            "tags": ["tag1", "tag2", ...], // Tags should be specific to the error message and common terms used in the problem description
            "instruments": ["Instrument1", "Instrument2", ...], // Instruments that this solution applies to
            "models": ["Model1", "Model2", ...], // Models that this solution applies to
            "software_versions": ["1.0.0", "1.0.1", ...], // Software versions that this solution applies to, only use <MAJOR>.<MINOR>.<PATCH> format, do not include build numbers or other variations
            "problem_description": "Filename for the HTML block which outlines the problem.", // Files should be placed in assets/data/reference/solutions/; re-use includes whenever possible.
            "solution_description": "Filename for the HTML block which outlines the steps that should be taken to resolve the issue.", // Files should be placed in assets/data/reference/solutions/; re-use includes whenever possible.
            "references": [ // Array of references, each reference is an object with a title, url, and src (source) which is the name of the source, e.g. "OneNote", "MIRA::Service Bulletin", "MIRA::Knowledge Base", "Sharepoint::Document", etc.
                {"title": "Reference Title", "url": "https://example.com", "src": "Source Name"}
                // Additional references can be added here
            ]
        }
        */
        "00001": {
            "title": "Error 29 or 34",
            "tags": ["error 34", "34", "error 29", "29", "system", "initialization", "not completed", "failed to attain", "required", "projector", "intensity", "orange banner", "start up"],
            "instruments": ["HFA"],
            "models": ["HFA3 830", "HFA3 840", "HFA3 850", "HFA3 860"],
            "software_versions": ["1.5.1", "1.5.2", "1.5.3", "1.6.1"],
            "problem_description": "hfa3_start-up_error_29-34.html",
            "solution_description": "hfa3_error_34_solution.html",
            "references": [
                {"title": "Error 29 - Replace bulb", "url": "https://zeiss-my.sharepoint.com/personal/don_renfrow_zeiss_com/_layouts/Doc.aspx?sourcedoc={BE01033C-FBAE-452B-9D6C-0600B981DE53}&wd=target%28HFA3%20ALL%20MODELS.one%7C41994B2F-AC33-4B1C-AAED-181045CC14C4%2FError%20%2029%20-%20Replace%20bulb%7CAE1C9E4F-48E8-4FE4-9084-E7817CC19333%2F%29&wdpartid={A80C0206-57EA-0CDF-1523-16EB77C5C4C6}{1}&wdsectionfileid={9599597F-B1AB-463F-B4D8-197A014914B1", "src": "OneNote"},
                {"title": "Error 34 - Replace bulb", "url": "https://zeiss-my.sharepoint.com/personal/don_renfrow_zeiss_com/_layouts/Doc.aspx?sourcedoc={BE01033C-FBAE-452B-9D6C-0600B981DE53}&wd=target%28HFA3%20ALL%20MODELS.one%7C41994B2F-AC33-4B1C-AAED-181045CC14C4%2FError%2034%20-%20Replace%20bulb%7C28762F5F-5224-4A7B-B600-D369961109AB%2F%29&wdpartid={7C705DB3-74F3-060D-2A8E-7D1C5FB08470}{1}&wdsectionfileid={9599597F-B1AB-463F-B4D8-197A014914B1", "src": "OneNote"},
                {"title": "HFA3_SB_045_HFA3 - Troubleshooting Initialization Errors", "url": "https://mira.med.zeiss.com/service-express/portal/object/lvid/SM_000000-2516-050_01_002?context=%7B%22filter%22%3A%7B%22ProductHierarchy%22%3A%5B%22http%3A%2F%2Fmetadata.zeiss.de%2Fmed%23OPT%5Cu001fhttp%3A%2F%2Fmetadata.zeiss.de%2Fmed%23OphtalmicDiagnostics%5Cu001fhttp%3A%2F%2Fmetadata.zeiss.de%2Fmed%23Perimetry%22%5D%7D%2C%22text%22%3A%22error+34%22%2C%22page%22%3A1%2C%22useExpertQuery%22%3A0%7D", "src": "MIRA::Service Bulletin"}
            ]
        },
        "00002": {
            "title": "Error 41",
            "tags": ["error 41", "41", "cannot complete", "initialization", "motor error", "fault state", "turret", "start up", "error 5", "5"],
            "instruments": ["HFA"],
            "models": ["HFA3 830", "HFA3 840", "HFA3 850", "HFA3 860"],
            "software_versions": ["1.5.1", "1.5.2", "1.5.3", "1.6.1"],
            "problem_description": "hfa3_error_41.html",
            "solution_description": "hfa3_error_41_solution.html",
            "references": [
                {"title": "Error 41 - Upgrade software", "url": "https://zeiss-my.sharepoint.com/personal/don_renfrow_zeiss_com/_layouts/Doc.aspx?sourcedoc={BE01033C-FBAE-452B-9D6C-0600B981DE53}&wd=target%28HFA3%20ALL%20MODELS.one%7C41994B2F-AC33-4B1C-AAED-181045CC14C4%2FError%2041%20-%20Update%20SW%7CF02F72D1-60DA-4422-B745-6F34D4E955A5%2F%29&wdpartid={84854F90-42B2-05CF-3A0F-4AB6AE863958}{1}&wdsectionfileid={9599597F-B1AB-463F-B4D8-197A014914B1}", "src": "OneNote"}
            ]
        },
        "00003": {
            "title": "Error 25",
            "tags": ["error 25", "25", "system", "system initialization", "orange banner", "not completed", "system initialization not completed", "current test is cancelled", "please restart", "test"],
            "instruments": ["HFA"],
            "models": ["HFA3 830", "HFA3 840", "HFA3 850", "HFA3 860"],
            "software_versions": ["1.5.2"],
            "problem_description": "hfa3_error_25.html",
            "solution_description": "dispatch_fse_solution.html",
            "references": [
                {"title": "Error 25 - System Initialization Not Completed", "url": "https://zeiss-my.sharepoint.com/personal/don_renfrow_zeiss_com/_layouts/Doc.aspx?sourcedoc={BE01033C-FBAE-452B-9D6C-0600B981DE53}&wd=target%28HFA3%20ALL%20MODELS.one%7C41994B2F-AC33-4B1C-AAED-181045CC14C4%2FError%2025%20-%20System%20Initialization%20Not%20Completed%7C65EBE6B4-8F39-407E-92C6-E368F009AD21%2F%29&wdpartid={9E06A2BF-88D2-070A-2385-4991C9B602D6}{1}&wdsectionfileid={9599597F-B1AB-463F-B4D8-197A014914B1}", "src": "OneNote"}
            ]
        },
        "00004": {
            "title": "Freeze on Next or Missing Mapped Drives",
            "tags": ["freeze", "hang", "lock", "unresponsive", "starting test", "start test", "daily", "every day", "morning", "every morning", "each morning", "next button", "next", "network map", "network drive", "mapped drive", "mapped", "re-map", "manual map", "drive", "disappear", "drive disconnected", "disconnect", "location"],
            "instruments": ["HFA"],
            "models": ["HFA3 830", "HFA3 840", "HFA3 850", "HFA3 860"],
            "software_versions": ["1.5.3"],
            "problem_description": "hfa3_freeze_on_next_drives_not_mapping.html",
            "solution_description": "hfa3_missing_mapped_drive_solution.html",
            "references": [
                {"title": "When Network map disconnects/disappears...", "url": "https://zeiss-my.sharepoint.com/personal/don_renfrow_zeiss_com/_layouts/Doc.aspx?sourcedoc={BE01033C-FBAE-452B-9D6C-0600B981DE53}&wd=target%28HFA3%20ALL%20MODELS.one%7C41994B2F-AC33-4B1C-AAED-181045CC14C4%2FWhen%20Network%20map%20disconnects%5C%2FDisappears%20%2C%20this%20is%20the%20last%7C678B8385-D330-4F17-AE27-85ADD12FFAC8%2F%29&wdpartid={F2F1A3A5-C863-4F6E-BC6D-4B60DC57505A}{18}&wdsectionfileid={9599597F-B1AB-463F-B4D8-197A014914B1}", "src": "OneNote"}
            ]
        },
        "00005": {
            "title": "Errors in Scanning Module",
            "tags": ["errors", "detected", "scanning module", "acquire or review scans", "scans", "scanner", "module", "start up", "start-up", "problem is corrected", "problem", "corrected", "contact", "carl zeiss meditec", "customer service", "customer support", "assistance", "details", "instrument", "acquire or review", "red x", "x icon", "cirrus hd-oct", "cirrus", "hd-oct", "hd oct"],
            "instruments": ["Cirrus OCT"],
            "models": ["Cirrus HD-OCT 500", "Cirrus HD-OCT 5000", "Cirrus HD-OCT 6000"],
            "software_versions": ["8.1.0", "9.5.1", "9.5.2", "11.5.2", "11.5.3", "11.7.0", "11.7.1", "11.7.2"],
            "problem_description": "oct_start-up_scanning_module_errors.html",
            "solution_description": "oct_start-up_scanning_module_solutions.html",
            "references": [
                {"title": "Self test: Instrument errors", "url": "https://zeiss.sharepoint.com/sites/OCTTechnicalSupport/_layouts/Doc.aspx?sourcedoc={2D11422D-7802-40B6-A0D4-C7EF3B2C4EDC}&wd=target%28Common%20Issues.one%7CFE1CBE1A-12E5-4479-9DAA-D61ED3EA7C83%2FSelf%20test%3A%20Instrument%20errors%7C0C1E23AC-56C3-458F-9BEC-0C4216724C0C%2F%29&wdpartid={DAA2736B-757B-4CEC-86BB-80F899226C18}{89}&wdsectionfileid={CCB5FC0F-FFAB-408D-B757-4F1E82F0EAC3}", "src": "OneNote"},
                {"title": "CIRRUS_5000_SB_007: Known Issues", "url": "https://mira.med.zeiss.com/service-express/portal/object/lvid/SM_000000-2515-253_01_002?context=%7B%22filter%22%3A%7B%22InformationTypes%22%3A%5B%22http%3A%2F%2Fmetadata.zeiss.de%2Fmed%23ServiceBulletin%22%5D%7D%2C%22text%22%3A%22CIRRUS_5000_SB_007%22%2C%22page%22%3A1%2C%22useExpertQuery%22%3A0%7D", "src": "MIRA::Service Bulletin"}
            ]
        },
        "00006": {
            "title": "Database Initialization Issues",
            "tags": ["error", "start up", "start-up", "migration", "prior", "database", "db", "data base", "initialization", "device", "zeiss logo", "white screen", "boot", "boot-up", "launch", "databaseintegrity", "databasesnapshotactivity", "ensuredatabaseintegrity", "exception", "sql", "sqlexception", "cannot open database", "czmdefault"],
            "instruments": ["IOLMaster"],
            "models": ["IOLMaster 700"],
            "software_versions": ["1.90.40", "1.90.12"],
            "problem_description": "iolmaster_migration_prior.html",
            "solution_description": "iolmaster_migration_prior_to_database_initialization_solution.html",
            "references": [
                {"title": "IOLM700-Migration prior to database initialization - Error creating device database snapshot 1", "url": "https://zeiss.sharepoint.com/:b:/r/sites/msteams_729f4a/Shared%20Documents/General/IOLM700%E2%80%93Migration%20prior%20to%20database%20initialization%20-%20Error%20creating%20device%20database%20snapshot%201.pdf?csf=1&web=1&e=guJI7o", "src": "SharePoint"},
                {"title": "IOLMaster 700 - White Screen with Zeiss Logo on Bootup", "url": "https://zeiss-my.sharepoint.com/personal/don_renfrow_zeiss_com/_layouts/Doc.aspx?sourcedoc={BE01033C-FBAE-452B-9D6C-0600B981DE53}&wd=target%28IOLMASTER%20700.one%7C9D82B692-F67F-4FE4-ACC7-BE726F16E193%2FIOLMaster%20700%20-%20White%20Screen%20with%20Zeiss%20Logo%20on%20Bootup%7CB5ADF9DE-0E6C-474D-9D61-B90863CC5E1C%2F%29&wdpartid={C63F457F-4A62-4318-AA5A-7383BAD2A5D6}{128}&wdsectionfileid={B603A2C5-7B19-4DE8-B9F0-89FF6238D4C8}", "src": "OneNote"},
                {"title": "Adjustment and Calibration: 4.5.4 Deleting of corrupt databases", "url": "https://mira.med.zeiss.com/service-express/portal/object/lvid/SM_000000-2516-448_01_002?context=%7B%22filter%22%3A%7B%7D%2C%22text%22%3A%22IOLMaster+700+service+manual+4.5.4%22%2C%22page%22%3A2%2C%22useExpertQuery%22%3A0%7D", "src": "MIRA::Service Manual"}
            ]
        },
        "00007": {
            "title": "Screen Resolution Error",
            "tags": ["screen", "resolution", "screen resolution", "less than", "1920x1080", "1920", "1080", "application will close", "start up", "start-up", "red x", "ok button"],
            "instruments": ["Cirrus OCT"],
            "models": ["Cirrus HD-OCT 6000"],
            "problem_description": "screen_resolution_error.html",
            "solution_description": "screen_resolution_solution.html",
            "references": [
                {"title": "Screen Resolution is less than 1920 x 1080. The application will close", "url": "https://zeiss-my.sharepoint.com/personal/don_renfrow_zeiss_com/_layouts/Doc.aspx?sourcedoc={BE01033C-FBAE-452B-9D6C-0600B981DE53}&wd=target%28CIRRUS%20OCT%20ALL%20MODELS.one%7C4AEE7F34-6ABD-4543-BC96-64DDD1137CE2%2FScreen%20Resolution%20is%20less%20than%201920%20x%201080.%20The%20application%7C460CECF7-24F8-458D-9C3F-A7F4012525A5%2F%29&wdpartid={C39063C4-C46B-4D42-8D6E-A9DA1B3BD24C}{1}&wdsectionfileid={FE4D980A-3850-43D2-82EB-3983DCD74828}", "src": "OneNote"},
                {"title": "Cirrus 6000 Application unable for lunch, showing screen resolution error", "url": "https://mira.med.zeiss.com/service-express/portal/object/objectid/ticketid_1322165?context=%7B%22filter%22%3A%7B%22ProductHierarchy%22%3A%5B%22http%3A%2F%2Fmetadata.zeiss.de%2Fmed%23OPT%5Cu001fhttp%3A%2F%2Fmetadata.zeiss.de%2Fmed%23OphtalmicDiagnostics%5Cu001fhttp%3A%2F%2Fmetadata.zeiss.de%2Fmed%23OCTSystems%22%5D%7D%2C%22text%22%3A%221920%22%2C%22useExpertQuery%22%3A0%7D", "src": "MIRA::Knowledge Base"}
            ]
        }
    }
}