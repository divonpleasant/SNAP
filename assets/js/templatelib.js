// FUNCTIONS
// Process parts list data
function procPartsList(parts) {
    if (parts == '') {
        return "NO PARTS DEFINED\n";
    }
    parts_array = parts.split("\n");
    var final_part_str = '';
    for (let i = 0; i < parts_array.length; i++) {
        var counter = i + 1;
        var part_split = parts_array[i].split(';');
        var part_name = part_split[0];
        var part_number = part_split[1];
        var part_str_counter = '[' + counter + ' of ' + parts_array.length + ']    ';
        var name_str = part_name + "\n";
        var part_num_str = " ".repeat(part_str_counter.length) + part_number + "\n";
        final_part_str = final_part_str + part_str_counter + name_str + part_num_str;
    }
    return final_part_str;
}

function setPreferredComm() {
    var comm_pref = outputCommunicationPref();
    switch (comm_pref) {
        case 'Customer prefers phone communication':
            return 'p';
            break;
        case 'Customer prefers email communication':
            return 'e';
            break;
        case '':
        case 'Customer has no communication preference':
            return '';
            break;
        default:
            console.error('outputCommunicationPref() returned invalid result: ' + comm_pref);
            return '';
            break;
    }
}

// Check if EOS form was correctly completed
function eosPreCheck() {
    debugmsg(5, 'Executing eosPreCheck');
    if (document.getElementById('eos-instrument-type').value === '' || document.getElementById('eos-instrument-model').value === '') {
        var type_model_msg = 'The instrument and/or model were not selected or could not be found.';
        console.error(type_model_msg);
        alert(type_model_msg);
        return false;
    } else {
        return true;
    }
}

// Retrieve EoS data from Devices object
function fetchEosData() {
    debugmsg(5, 'Retrieving Devices object');
    var activeEosModel = Devices.instruments[document.getElementById('eos-instrument-type').value];
    return activeEosModel;
}

/* This function processes various model data and returns contextual strings to
be sent to the template as context. This context is flattened into the final
context array (with the 0 index being the device's short name) in these
indices:
    1: End of Support Notice - type of support end and date of Eo[G]S, if applicable
    2: Optional notification regarding service agreements and contracts
    3: Optional link to EoS announcement document, if available
*/
function eosProcContext(data) {
    var model_data = data.models[document.getElementById('eos-instrument-model').value]
    // declarations
    var detail_page = '';
    var end_of_support_notice = '';
    var support_context_str = '';
    var output_eos_date = '';
    var use_date = false;
    var use_terminated_agreements_clause = false;
    // process
    if (model_data.eos_url != '') {
        detail_page = "For more detailed information on your system's support, please visit this page:\n" + model_data.eos_url + "\n\n";
    }
    if (model_data.eos_date != '') {
        var eosDate = new Date(model_data.eos_date);
        support_context_str = 'has officially ended support';
        use_date = true;
        use_terminated_agreements_clause = true;
    } else if (model_data.eogs_date != '') {
        var eosDate = new Date(model_data.eogs_date);
        support_context_str = 'has officially ended guaranteed support';
        use_date = true;
    } else {
        support_context_str = 'may have modified full support';
    }
    debugmsg(4, 'eosDate: ' + eosDate);
    output_eos_date = (use_date) ? ', as of ' + eosDate.toLocaleString("en-US", {month: "long", day: "numeric", year: "numeric"}) + ', ' : ' ';
    agreements_str = (use_date) ? 'All existing service agreements for the ' + model_data.full_name + ' systems were terminated as of ' + eosDate.toLocaleString("en-US", {month: "long", day: "numeric", year: "numeric"}) + ". If you had a prepaid service agreement extending beyond this date, ZEISS has already issued credits accordingly.\n\n" : '';
    end_of_support_notice = output_eos_date + 'ZEISS ' + support_context_str;
    agreements_notice = (use_terminated_agreements_clause) ? agreements_str : "\n\n";
    debugmsg(5, 'end_of_support_notice: ' + end_of_support_notice);
    debugmsg(5, 'agreements_str: ' + agreements_str);
    debugmsg(5, 'detail_page: ' + detail_page);
    var processed_verbiage = [end_of_support_notice, agreements_str, detail_page];
    return processed_verbiage;
}

// OBJECTS
// Template References (re-usable HTML blobs)
TRef = {
    "cct_in_crm": "<a href=\"https://p8cmain.zeiss.org/sap(bD1lbiZjPTAxMCZkPW1pbg==)/crm_logon/default.htm\" target=\"_blank\">Create CCT in CRM</a>",
    "crm": "<a href=\"https://p8cmain.zeiss.org/sap(bD1lbiZjPTAxMCZkPW1pbg==)/crm_logon/default.htm\" target=\"_blank\">CRM</a>"
}

// Devices Metadata Object **SOURCE OF TRUTH**
Devices = {
    "master_reference": "https://www.zeiss.com/meditec/us/service/important-product-lifecycle-notifications.html",
    "instruments": {
        "acuitus": {
            "product_name": "Acuitus",
            "product_class": "Auto Refractor Keratometer",
            "short_name": "Acuitus",
            "models": {
                "5000": {
                    "model_number": "5000",
                    "full_name": "Acuitus 5000",
                    "launch_date": "",
                    "eos_date": "02-15-2014",
                    "eogs_date": "",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/acuitus-sunset-letter.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/acuitus-sunset-letter.pdf"
                },
                "5010": {
                    "model_number": "5010",
                    "full_name": "Acuitus 5010",
                    "launch_date": "",
                    "eos_date": "02-15-2014",
                    "eogs_date": "",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/acuitus-sunset-letter.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/acuitus-sunset-letter.pdf"
                },
                "5015": {
                    "model_number": "5015",
                    "full_name": "Acuitus 5015",
                    "launch_date": "",
                    "eos_date": "02-15-2014",
                    "eogs_date": "",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/acuitus-sunset-letter.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/acuitus-sunset-letter.pdf"
                }
            }
        },
        "atlas": {
            "product_name": "ATLAS",
            "product_class": "Corneal Tomographer",
            "short_name": "ATLAS",
            "models": {
                "991": {
                    "model_number": "991",
                    "full_name": "ATLAS 991",
                    "launch_date": "",
                    "eos_date": "11-01-2009",
                    "eogs_date": "11-01-2009",
                    "eos_url": ""
                },
                "992": {
                    "model_number": "992",
                    "full_name": "ATLAS 992",
                    "launch_date": "",
                    "eos_date": "11-01-2009",
                    "eogs_date": "11-01-2009",
                    "eos_url": ""
                },
                "993": {
                    "model_number": "993",
                    "full_name": "ATLAS 993",
                    "launch_date": "",
                    "eos_date": "12-01-2018",
                    "eogs_date": "12-01-2018",
                    "eos_url": ""
                },
                "995": {
                    "model_number": "995",
                    "full_name": "ATLAS 995",
                    "launch_date": "",
                    "eos_date": "12-01-2018",
                    "eogs_date": "12-01-2018",
                    "eos_url": ""
                }
            }
        },
        "cirrus-oct": {
            "product_name": "CIRRUS HD-OCT",
            "product_class": "Optical Coherence Tomographer",
            "short_name": "Cirrus OCT",
            "models": {
                "400": {
                    "model_number": "400",
                    "full_name": "Cirrus HD-OCT 400",
                    "launch_date": "",
                    "eos_date": "04-30-2022",
                    "eogs_date": "04-2022",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/final_eos_cirrus_400_4000.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/final_eos_cirrus_400_4000.pdf"
                },
                "4000": {
                    "model_number": "4000",
                    "full_name": "Cirrus HD-OCT 4000",
                    "launch_date": "",
                    "eos_date": "04-30-2022",
                    "eogs_date": "04-30-2022",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/final_eos_cirrus_400_4000.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/final_eos_cirrus_400_4000.pdf"
                },
                "500": {
                    "model_number": "500",
                    "full_name": "Cirrus HD-OCT 500",
                    "eos_date": "",
                    "eogs_date": "",
                    "eos_url": ""
                },
                "5000": {
                    "model_number": "5000",
                    "full_name": "Cirrus HD-OCT 5000",
                    "launch_date": "",
                    "eos_date": "",
                    "eogs_date": "",
                    "eos_url": ""
                },
                "6000": {
                    "model_number": "6000",
                    "full_name": "Cirrus HD-OCT 6000",
                    "launch_date": "",
                    "eos_date": "",
                    "eogs_date": "",
                    "eos_url": ""
                },
            }
        },
        "cirrus-photo": {
            "product_name": "CIRRUS Photo",
            "product_class": "Fundus Camera",
            "short_name": "Cirrus Photo",
            "models": {
                "600": {
                    "model_number": "600",
                    "full_name": "Cirrus Photo 600",
                    "launch_date": "08-01-2010",
                    "eos_date": "",
                    "eogs_date": "03-30-2024",
                    "eos_url": ""
                },
                "800": {
                    "model_number": "800",
                    "full_name": "Cirrus Photo 800",
                    "launch_date": "03-01-2010",
                    "eos_date": "",
                    "eogs_date": "03-30-2024",
                    "eos_url": ""
                },
            }
        },
        "clarus": {
            "product_name": "Clarus",
            "product_class": "Fundus Camera",
            "short_name": "Clarus",
            "models": {
                "500": {
                    "model_number": "500",
                    "full_name": "Clarus 500",
                    "launch_date": "11-01-2018",
                    "eos_date": "",
                    "eogs_date": "",
                    "eos_url": ""
                }
            }
        },
        "ct": {
            "product_name": "CT",
            "product_class": "Corneal Tomographer",
            "short_name": "CT",
            "models": {
                "910": {
                    "model_number": "910",
                    "full_name": "CT 910",
                    "launch_date": "",
                    "eos_date": "08-01-2008",
                    "eogs_date": "",
                    "eos_url": ""
                },
                "920": {
                    "model_number": "920",
                    "full_name": "CT 920",
                    "launch_date": "",
                    "eos_date": "08-01-2008",
                    "eogs_date": "",
                    "eos_url": ""
                },
                "990": {
                    "model_number": "990",
                    "full_name": "CT 990",
                    "launch_date": "",
                    "eos_date": "08-01-2008",
                    "eogs_date": "",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/end-of-support-notice-ct-990.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/end-of-support-notice-ct-990.pdf"
                },
                "991": {
                    "model_number": "991",
                    "full_name": "CT 991",
                    "launch_date": "",
                    "eos_date": "09-01-2009",
                    "eogs_date": "",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/end-of-support-notice-ct991-992.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/end-of-support-notice-ct991-992.pdf"
                },
                "992": {
                    "model_number": "992",
                    "full_name": "CT 992",
                    "launch_date": "",
                    "eos_date": "09-01-2009",
                    "eogs_date": "",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/end-of-support-notice-ct991-992.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/end-of-support-notice-ct991-992.pdf"
                },
            }
        },
        "fundus-camera": {
            "product_name": "Fundus Camera",
            "product_class": "Fundus Camera",
            "short_name": "Fundus Camera",
            "models": {
                "FF 4": {
                    "model_number": "FF 4",
                    "full_name": "Fundus Camera FF 4",
                    "launch_date": "",
                    "eos_date": "12-01-2003",
                    "eogs_date": "12-01-2003",
                    "eos_url": ""
                },
                "FF 5": {
                    "model_number": "FF 5",
                    "full_name": "Fundus Camera FF 5",
                    "launch_date": "",
                    "eos_date": "12-01-2003",
                    "eogs_date": "12-01-2003",
                    "eos_url": ""
                },
                "FF 450": {
                    "model_number": "FF 450",
                    "full_name": "Fundus Camera FF 450",
                    "launch_date": "",
                    "eos_date": "12-01-2015",
                    "eogs_date": "12-01-2003",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/end-of-support-notice_ff450_vp430450_mcaf_02_01_11.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/end-of-support-notice_ff450_vp430450_mcaf_02_01_11.pdf"
                },
                "FF 450 IRu": {
                    "model_number": "FF 450 IRu",
                    "full_name": "Fundus Camera FF 450 IRu",
                    "launch_date": "",
                    "eos_date": "12-01-2015",
                    "eogs_date": "12-01-2003",
                    "eos_url": ""
                },
                "FF 450plus": {
                    "model_number": "FF 450plus",
                    "full_name": "Fundus Camera FF 450plus",
                    "launch_date": "04-01-2001",
                    "eos_date": "",
                    "eogs_date": "",
                    "eos_url": ""
                },
                "FF 450 IR": {
                    "model_number": "FF 450 IR",
                    "full_name": "Fundus Camera FF 450 IR",
                    "launch_date": "04-01-2001",
                    "eos_date": "12-01-2015",
                    "eogs_date": "12-01-2010",
                    "eos_url": ""
                },
                "FF 450plus IR": {
                    "model_number": "FF 450plus IR",
                    "full_name": "Fundus Camera FF 450plus IR",
                    "launch_date": "04-01-2001",
                    "eos_date": "",
                    "eogs_date": "",
                    "eos_url": ""
                },
                "FF 450plus IRu": {
                    "model_number": "FF 450plus IRu",
                    "full_name": "Fundus Camera FF 450plus IRu",
                    "launch_date": "04-01-2001",
                    "eos_date": "",
                    "eogs_date": "",
                    "eos_url": ""
                },
                "FK 30": {
                    "model_number": "FK 30",
                    "full_name": "Fundus Camera FK 30",
                    "launch_date": "",
                    "eos_date": "12-01-2003",
                    "eogs_date": "12-01-2003",
                    "eos_url": ""
                },
                "RC 310": {
                    "model_number": "RC 310",
                    "full_name": "Fundus Camera RC 310",
                    "launch_date": "",
                    "eos_date": "12-01-2003",
                    "eogs_date": "12-01-2003",
                    "eos_url": ""
                }
            }
        },
        "hfa": {
            "product_name": "Humphrey Field Analyzer",
            "product_class": "Ophthalmic Visual Field",
            "short_name": "HFA",
            "models": {
                "750i": {
                    "model_number": "750i",
                    "full_name": "HFA 750i",
                    "launch_date": "",
                    "eos_date": "09-17-2024",
                    "eogs_date": "",
                    "eos_url": ""
                },
                "730": {
                    "model_number": "730",
                    "full_name": "HFA II 730",
                    "launch_date": "",
                    "eos_date": "03-01-2008",
                    "eogs_date": "",
                    "eos_url": ""
                },
                "735": {
                    "model_number": "735",
                    "full_name": "HFA II 735",
                    "launch_date": "",
                    "eos_date": "03-01-2008",
                    "eogs_date": "",
                    "eos_url": ""
                },
                "740": {
                    "model_number": "740",
                    "full_name": "HFA II 740",
                    "launch_date": "",
                    "eos_date": "03-01-2008",
                    "eogs_date": "",
                    "eos_url": ""
                },
                "745": {
                    "model_number": "745",
                    "full_name": "HFA II 745",
                    "launch_date": "",
                    "eos_date": "03-01-2008",
                    "eogs_date": "",
                    "eos_url": ""
                },
                "750": {
                    "model_number": "750",
                    "full_name": "HFA II 750",
                    "launch_date": "",
                    "eos_date": "03-01-2008",
                    "eogs_date": "",
                    "eos_url": ""
                }
            }
        },
        "iolmaster": {
            "product_name": "IOLMaster",
            "product_class": "Intra Ocular Lens",
            "short_name": "IOLMaster",
            "models": {
                "1": {
                    "model_number": "1",
                    "full_name": "IOLMaster 1",
                    "launch_date": "",
                    "eos_date": "07-01-2013",
                    "eogs_date": "",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/iolmaster-1-and-2-end-of-service-ltr.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/iolmaster-1-and-2-end-of-service-ltr.pdf"
                },
                "2": {
                    "model_number": "2",
                    "full_name": "IOLMaster 2",
                    "launch_date": "",
                    "eos_date": "07-01-2013",
                    "eogs_date": "",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/iolmaster-1-and-2-end-of-service-ltr.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/iolmaster-1-and-2-end-of-service-ltr.pdf"
                },
                "3": {
                    "model_number": "3",
                    "full_name": "IOLMaster 3",
                    "launch_date": "",
                    "eos_date": "",
                    "eogs_date": "03-01-2020",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/iolmaster-3-5-end-of-support-ltr.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/iolmaster-3-5-end-of-support-ltr.pdf"
                },
                "4": {
                    "model_number": "4",
                    "full_name": "IOLMaster 4",
                    "launch_date": "",
                    "eos_date": "",
                    "eogs_date": "03-01-2020",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/iolmaster-3-5-end-of-support-ltr.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/iolmaster-3-5-end-of-support-ltr.pdf"
                },
                "5": {
                    "model_number": "5",
                    "full_name": "IOLMaster 5",
                    "launch_date": "",
                    "eos_date": "",
                    "eogs_date": "03-01-2020",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/iolmaster-3-5-end-of-support-ltr.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/iolmaster-3-5-end-of-support-ltr.pdf"
                }
            }
        },
        "matrix": {
            "product_name": "Humphrey Matrix",
            "product_class": "",
            "short_name": "Matrix",
            "models": {
                "715": {
                    "model_number": "715",
                    "full_name": "Matrix 715",
                    "launch_date": "",
                    "eos_date": "03-01-2021",
                    "eogs_date": "",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/final_cap-en-us_31_028_0005i_eos_matrix_715.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/final_cap-en-us_31_028_0005i_eos_matrix_715.pdf"
                }
            }
        },
        "oct": {
            "product_name": "OCT",
            "product_class": "Optical Coherence Tomographer",
            "short_name": "OCT",
            "models": {
                "1": {
                    "model_number": "1",
                    "full_name": "OCT 1",
                    "launch_date": "",
                    "eos_date": "02-01-2011",
                    "eogs_date": "",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/end-of-support-notice-oct-1-2.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/end-of-support-notice-oct-1-2.pdf"
                },
                "2": {
                    "model_number": "2",
                    "full_name": "OCT 2",
                    "launch_date": "",
                    "eos_date": "02-01-2011",
                    "eogs_date": "",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/end-of-support-notice-oct-1-2.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/end-of-support-notice-oct-1-2.pdf"
                }
            }
        },
        "slit-lamp": {
            "product_name": "Slit Lamps",
            "product_class": "Slit Lamp",
            "short_name": "SL",
            "models": {
                "10": {
                    "model_number": "10",
                    "full_name": "10 SL",
                    "launch_date": "",
                    "eos_date": "03-01-2002",
                    "eogs_date": "03-01-2002",
                    "eos_url": ""
                },
                "10-O": {
                    "model_number": "10",
                    "full_name": "10 SL/O",
                    "launch_date": "",
                    "eos_date": "03-01-2002",
                    "eogs_date": "03-01-2002",
                    "eos_url": ""
                },
                "20": {
                    "model_number": "20",
                    "full_name": "20 SL",
                    "launch_date": "",
                    "eos_date": "09-01-2004",
                    "eogs_date": "09-01-2004",
                    "eos_url": ""
                },
                "30": {
                    "model_number": "30",
                    "full_name": "30 SL/M",
                    "launch_date": "",
                    "eos_date": "12-01-2006",
                    "eogs_date": "12-01-2005",
                    "eos_url": ""
                },
                "40": {
                    "model_number": "40",
                    "full_name": "40 SL/P",
                    "launch_date": "",
                    "eos_date": "03-01-2005",
                    "eogs_date": "03-01-2005",
                    "eos_url": ""
                },
                "100": {
                    "model_number": "100/16",
                    "full_name": "SL 100/16",
                    "launch_date": "",
                    "eos_date": "03-01-2002",
                    "eogs_date": "03-01-2002",
                    "eos_url": ""
                },
                "105": {
                    "model_number": "105",
                    "full_name": "SL 105",
                    "launch_date": "",
                    "eos_date": "12-01-2012",
                    "eogs_date": "12-01-2009",
                    "eos_url": ""
                },
                "115": {
                    "model_number": "115 classic",
                    "full_name": "SL 115 classic",
                    "launch_date": "",
                    "eos_date": "",
                    "eogs_date": "",
                    "eos_url": ""
                },
                "120": {
                    "model_number": "120",
                    "full_name": "SL 120",
                    "launch_date": "",
                    "eos_date": "",
                    "eogs_date": "",
                    "eos_url": ""
                },
                "130": {
                    "model_number": "130",
                    "full_name": "SL 130",
                    "launch_date": "",
                    "eos_date": "",
                    "eogs_date": "",
                    "eos_url": ""
                },
                "160": {
                    "model_number": "160",
                    "full_name": "SL 160",
                    "launch_date": "",
                    "eos_date": "",
                    "eogs_date": "",
                    "eos_url": ""
                },
                "220": {
                    "model_number": "220",
                    "full_name": "SL 220",
                    "launch_date": "",
                    "eos_date": "",
                    "eogs_date": "",
                    "eos_url": ""
                },
                "800": {
                    "model_number": "800",
                    "full_name": "SL 800",
                    "launch_date": "",
                    "eos_date": "",
                    "eogs_date": "",
                    "eos_url": ""
                },
                "Photo": {
                    "model_number": "Photo-SL",
                    "full_name": "Photo-SL",
                    "launch_date": "",
                    "eos_date": "03-01-2002",
                    "eogs_date": "03-01-2002",
                    "eos_url": ""
                },
                "CAM 5.0": {
                    "model_number": "CAM 5.0",
                    "full_name": "SL CAM 5.0",
                    "launch_date": "",
                    "eos_date": "",
                    "eogs_date": "",
                    "eos_url": ""
                }
            }
        },
        "stratus": {
            "product_name": "Stratus",
            "product_class": "Optical Coherence Tomographer",
            "short_name": "Stratus",
            "models": {
                "P3": {
                    "model_number": "P3",
                    "full_name": "Stratus P3",
                    "launch_date": "",
                    "eos_date": "04-30-2019",
                    "eogs_date": "",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/stratus-p3-p4_eos_letter_021318.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/stratus-p3-p4_eos_letter_021318.pdf"
                },
                "P4": {
                    "model_number": "P4",
                    "full_name": "Stratus P4",
                    "launch_date": "",
                    "eos_date": "04-30-2019",
                    "eogs_date": "",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/stratus-p3-p4_eos_letter_021318.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/stratus-p3-p4_eos_letter_021318.pdf"
                }
            }
        },
        "visante": {
            "product_name": "Visante",
            "product_class": "Optical Coherence Tomographer",
            "short_name": "Visante OCT",
            "models": {
                "1000": {
                    "model_number": "1000",
                    "full_name": "Visante OCT 1000",
                    "launch_date": "",
                    "eos_date": "06-01-2020",
                    "eogs_date": "",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/end-of-support-visante-oct-1000.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/end-of-support-visante-oct-1000.pdf"
                }
            }
        },
        "visucam": {
            "product_name": "VISUCAM",
            "product_class": "Visucam",
            "short_name": "Visucam",
            "models": {
                "Lite": {
                    "model_number": "Lite",
                    "full_name": "Visucam Lite",
                    "launch_date": "05-01-2002",
                    "eos_date": "12-01-2018",
                    "eogs_date": "04-01-2011",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/visucam-1st_gen.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/visucam-1st_gen.pdf"
                },
                "NM/FA1": {
                    "model_number": "NM/FA1",
                    "full_name": "VISUCAM NM/FA1",
                    "launch_date": "01-01-2006",
                    "eos_date": "12-01-2018",
                    "eogs_date": "12-01-2017",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/final_eos_visucam_nmfa1.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/final_eos_visucam_nmfa1.pdf"
                },
                "PRO NM 1": {
                    "model_number": "PRO NM 1",
                    "full_name": "VISUCAM PRO NM 1",
                    "launch_date": "12-01-2010",
                    "eos_date": "",
                    "eogs_date": "01-15-2020",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/visucam-sunset-letter.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/visucam-sunset-letter.pdf"
                },
                "PRO NM 2": {
                    "model_number": "PRO NM 2",
                    "full_name": "VISUCAM PRO NM 2",
                    "launch_date": "12-01-2010",
                    "eos_date": "",
                    "eogs_date": "01-15-2020",
                    "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/visucam-sunset-letter.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/visucam-sunset-letter.pdf"
                }
            }
        },
        "visupac": {
            "product_name": "VISUPAC",
            "product_class": "Visupac",
            "short_name": "VISUPAC",
            "models": {
                "430": {
                    "model_number": "430",
                    "full_name": "VISUPAC 430",
                    "launch_date": "",
                    "eos_date": "",
                    "eogs_date": "",
                    "eos_url": ""
                },
                "450": {
                    "model_number": "450",
                    "full_name": "VISUPAC 450",
                    "launch_date": "",
                    "eos_date": "",
                    "eogs_date": "",
                    "eos_url": ""
                },
                "471": {
                    "model_number": "471",
                    "full_name": "VISUPAC 471",
                    "launch_date": "",
                    "eos_date": "",
                    "eogs_date": "",
                    "eos_url": ""
                },
                "481": {
                    "model_number": "481",
                    "full_name": "VISUPAC 481",
                    "launch_date": "",
                    "eos_date": "",
                    "eogs_date": "",
                    "eos_url": ""
                }
            }
        }
    }
};