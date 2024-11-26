// Function to open the overlay when the endofsupportLink is clicked
function showEosOverlay(event) {
    event.preventDefault();
    document.getElementById('eos-overlay').style.display = 'flex';
}
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
                "750": {
                    "model_number": "750i",
                    "full_name": "HFA 750i",
                    "launch_date": "",
                    "eos_date": "09-17-2024",
                    "eogs_date": "",
                    "eos_url": ""
                }
            }
        },
        "hfa-ii": {
            "product_name": "Humphrey Field Analyzer II",
            "product_class": "Ophthalmic Visual Field",
            "short_name": "HFA II",
            "models": {
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

function eos(event) {
    // Prevent the default action (which is following the link)
    event.preventDefault();

    // Self-identify for debugging
    debugmsg(1, 'Executing endOfSupport.js...');

    // Retrieve overlay form values
    var reqType = document.getElementById('eos-instrument-type').value;
    var reqModel = document.getElementById('eos-instrument-model').value;
    // Retrieve main form values
    var serial = document.getElementById('serial').value;
    var localContactPerson = document.getElementById('local-contact-person').value;
    var email = document.getElementById('email').value;
    // Parse data

    var serial_str = '';
    if (serial != '') {
        serial_str = "\nSerial Number: " + serial + "\n\n";
    }
    var detail_page = '';
    if (reqType == '' || reqModel == '') {
        console.error('The model selected is not End of Support, End of Guaranteed Support, or an error occurred.');
        alert('The model selected is not End of Support, End of Guaranteed Support, or an error occurred.');
        return;
    }
    if (Devices.instruments[reqType].models[reqModel].eos_url != '') {
        detail_page = "For more detailed information on your system's support, please visit this page:\n" +
                      Devices.instruments[reqType].models[reqModel].eos_url + "\n\n"
    }
    var end_of_support_notice = '';
    var support_context_str = '';
    var output_eos_date = '';
    var use_date = false;
    var use_terminated_agreements_clause = false;
    if (Devices.instruments[reqType].models[reqModel].eos_date != '') {
        var eosDate = new Date(Devices.instruments[reqType].models[reqModel].eos_date);
        support_context_str = 'has officially ended support';
        use_date = true;
        use_terminated_agreements_clause = true;
    } else if (Devices.instruments[reqType].models[reqModel].eogs_date != '') {
        var eosDate = new Date(Devices.instruments[reqType].models[reqModel].eogs_date);
        support_context_str = 'has officially ended guaranteed support';
        use_date = true;
    } else {
        support_context_str = 'may have modified full support';
    }
    debugmsg(4, 'eosDate: ' + eosDate);
    output_eos_date = (use_date) ? ', as of ' + eosDate.toLocaleString("en-US", {month: "long", day: "numeric", year: "numeric"}) + ', ' : ' ';
    agreements_str = 'All existing service agreements for the ' + Devices.instruments[reqType].models[reqModel].full_name + ' systems were terminated as of ' + eosDate.toLocaleString("en-US", {month: "long", day: "numeric", year: "numeric"}) + ". If you had a prepaid service agreement extending beyond this date, ZEISS has already issued credits accordingly.\n\n";
    end_of_support_notice = output_eos_date + 'ZEISS ' + support_context_str;
    agreements_notice = (use_terminated_agreements_clause) ? agreements_str : "\n\n";

    // Construct the subject line and body of the email
    var subject = "End of Support: " + Devices.instruments[reqType].models[reqModel].full_name;
    var body = "Dear " + localContactPerson + ",\n" + serial_str +
               "We want to inform you that" + end_of_support_notice + " for the " + Devices.instruments[reqType].models[reqModel].full_name + " systems. " +
               "This change means that we no longer offer technical expertise, parts, or service for these devices. Additionally, it is no longer " +
               "possible to extend, renew, or create new service agreements for these systems.\n\n" +
               agreements_str +
               "If you need guidance on how to manage your " + Devices.instruments[reqType].short_name + 
               " devices or are exploring alternative solutions, our sales team are here to assist you. " +
               "Please reach out to them at sales.support@zeiss.com. " +
               "They can provide detailed information on your options and help you find the best path forward for your needs.\n\n" + detail_page +
               "Regards,\n\n" + email_sig + "\n";

    // Encode the subject and body
    subject = encodeURIComponent(subject);
    body = encodeURIComponent(body);

    // Construct the mailto link using the dynamic email
    var mailtoLink = "mailto:" + encodeURIComponent(email) +
        "?subject=" + subject +
        "&body=" + body;

    // Open the mailto link
    window.location.href = mailtoLink;
    
    // Hide the overlay after proceeding
    document.getElementById('eos-overlay').style.display = 'none';
}

// Add event listener to the link
document.getElementById('endofsupportLink').addEventListener('click', showEosOverlay);

// Add event listener to the Submit button for sending the email
document.getElementById('eos-submit').addEventListener('click', eos);

// Close button functionality for the overlay
document.getElementById('eos-close-overlay').addEventListener('click', function() {
    document.getElementById('eos-overlay').style.display = 'none';
});