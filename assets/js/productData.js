/*
    This JSON contains all relevant data about the various products, product 
    lines, and product models supported by CZMI Technical Support. It is meant 
    to be an exhaustive source of truth used to populate various components of 
    the SNAP utility with product-specific data.
    
    DATA ITEMS
    The data in this JSON object is specifically structured and has a number 
    of key conventions in play to guide maintainers. The nested structure is 
    meant to allow the data to flow from general to specific, where specific 
    overrides the general but only where applicable. To facilitate this, there 
    are two distinct types of data groupings which imply certain behaviors.
    
        Required Data Items
        Required data items are those which are never to be undefined. The 
        values for these can be empty, (such as "" for strings, or 0 for 
        integers), but the key must appear for each enclosing data element. 
        
        Optional Data Items
        Optional data is that which can be left undefined, with no key. The 
        exception to this is array items which CAN be classified as optional, 
        but array items need at least their key and an empty array designator. 
        Note that not every array item is optional, the convention is that 
        arrays which are optional have plural keys (e.g. "subsets", 
        "model_serials", etc).
    
    VERSIONS
    Data Version is encoded into the JSON and should be iterated at the patch 
    (or sub) revision level whenever making a modification to an existing or 
    established data item (provided that modification is committed to the 
    source repository). Whenever a new (in-schema) data item is added or 
    removed, the minor revision number should be iterated.
    The major version should only be iterated whenever a release version of 
    the software is packaged, and/or the data has been given a vetting pass by 
    a designated data handler.
    
    The Schema Version should be updated as the structure of the data changes.
    The minor revision level should be iterated whenever an optional data item 
    is added.
    The major revision level should be iterated whenever a required data item 
    is added, the required format for a data item is changed, or any data item 
    is removed.
*/
debugmsg(2, 'Loading productData.js...');
function generateProductData() {
    debugmsg(5, 'Executing generateProductData...');
    this.pdata = {
        "data_version": "1.0.0",
        "schema_version": "8.1",
        "eos_primary_reference": "https://www.zeiss.com/meditec/us/service/important-product-lifecycle-notifications.html",
        "instruments": {
            "meta": {
                "sort_method": "alpha",
                "exemptions": [
                    "DEFAULT",
                    "meta"
                ]
            },
            "DEFAULT": {
                "product": {
                    "name": "DEFAULT_ENTRY_STRING",
                    "short_name": "SHORT_NAME_STRING",
                    "identifier": "ID_STRING",
                    "class": "CLASS_STRING",
                    "description": "PRODUCT_DESCRIPTION_BLOB",
                    "url": "PRODUCT_HOME_URL_STRING",
                    "modality": "MODALITY_CODE_STRING"
                },
                "support": {
                    "active_models": false,
                    "team": "SUPPORT_TEAM_ID_STRING",
                    "onenote_link": "MS_ONENOTE_INDEX_URL_STRING"
                },
                "models": {
                    "meta": {
                        "sort_method": "ALPHA|NUMERIC",
                        "exemptions": [
                            "serial",
                            "MODEL_ID"
                        ]
                    },
                    "serial": {
                        "format": "UNIVERSAL_SERIAL_FORMAT_STRING",
                        "example": "UNIVERSAL_SERIAL_EXAMPLE_STRING",
                        "software_location": "UNIVERSAL_SERIAL_LOCATION_IN_SOFTWARE_STRING",
                        "hardware_location": "UNIVERSAL_SERIAL_LOCATION_ON_HARDWARE_STRING",
                        "prefix_format": "UNIVERSAL_SERIAL_PREFIX_FORMAT_EXAMPLE_STRING",
                        "sequence_format": "UNIVERSAL_SERIAL_SEQUENCE_FORMAT_EXAMPLE_STRING"
                    },
                    "MODEL_ID": {
                        "model_serials": {
                            "format": "MODEL_SPECIFIC_SERIAL_FORMAT_STRING | UNDEF",
                            "example": "MODEL_SPECIFIC_SERIAL_EXAMPLE_STRING | UNDEF",
                            "software_location": "MODEL_SPECIFIC_SERIAL_LOCATION_IN_SOFTWARE_STRING | UNDEF",
                            "hardware_location": "MODEL_SPECIFIC_SERIAL_LOCATION_ON_HARDWARE_STRING | UNDEF",
                            "prefix_format": "MODEL_SPECIFIC_SERIAL_PREFIX_FORMAT_EXAMPLE_STRING | UNDEF",
                            "sequence_format": "MODEL_SPECIFIC_SERIAL_SEQUENCE_FORMAT_EXAMPLE_STRING | UNDEF"
                        },
                        "subsets": {
                            "SUBSET": {
                                "label": "SUBSET_LABEL_STRING",
                                "designation": "DATE|SERIAL|FEATURE|OTHER",
                                "designation_start": "SUBSET_DESIGNATION_STARTING_POINT_STRING | UNDEF",
                                "designation_end": "SUBSET_DESIGNATION_ENDING_POINT_STRING | UNDEF",
                                "designation_description": "SUBSET_DESIGNATION_DESCRIPTION_STRING | UNDEF"
                            }
                        },
                        "model_number": "MODEL_NUMBER_STRING",
                        "full_name": "INSTRUMENT_NAME_AND_MODEL_NUMBER_STRING",
                        "launch_date": "PRODUCT_LAUNCH_DATESTAMP",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "END_OF_SUPPORT_DATESTAMP",
                        "eogs_date": "END_OF_GUARANTEED_SUPPORT_DATESTAMP",
                        "eos_url": "END_OF_SUPPORT_DOCUMENT_URL_STRING",
                        "model_url": "MODEL_SPECIFIC_URL | UNDEF",
                        "instrument_codes": ["CODE_A_STRING", "CODE_B_STRING"]
                    }
                }
            },
            "acuitus": {
                "product": {
                    "name": "Acuitus",
                    "short_name": "Acuitus",
                    "identifier": "acuitus",
                    "class": "Auto-Refractor Keratometer",
                    "description": "",
                    "url": "",
                    "modality": "AR"
                },
                "support": {
                    "active_models": false,
                    "team": "refractive",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "numeric",
                        "exemptions": ["serial"]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "5000": {
                        "model_serials": {},
                        "model_number": "5000",
                        "full_name": "Acuitus 5000",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "02-15-2014",
                        "eogs_date": "",
                        "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/acuitus-sunset-letter.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/acuitus-sunset-letter.pdf",
                        "instrument_codes": ["8217"]
                    },
                    "5010": {
                        "model_serials": {},
                        "model_number": "5010",
                        "full_name": "Acuitus 5010",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "02-15-2014",
                        "eogs_date": "",
                        "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/acuitus-sunset-letter.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/acuitus-sunset-letter.pdf",
                        "instrument_codes": []
                    },
                    "5015": {
                        "model_serials": {},
                        "model_number": "5015",
                        "full_name": "Acuitus 5015",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "02-15-2014",
                        "eogs_date": "",
                        "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/acuitus-sunset-letter.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/acuitus-sunset-letter.pdf",
                        "instrument_codes": ["8220"]
                    }
                }
            },
            "artevo": {
                "product": {
                    "name": "Artevo",
                    "short_name": "Artevo",
                    "identifier": "artevo",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": ""
                },
                "support": {
                    "active_models": true,
                    "team": "surgical",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {},
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "750": {
                        "model_serials": {},
                        "subsets": {
                            "option2d": {
                                "label": "Option 2D",
                                "designation": "FEATURE",
                                "designation_description": ""
                            },
                            "option2d-oct": {
                                "label": "Option 2D OCT",
                                "designation": "FEATURE",
                                "designation_description": ""
                            },
                            "option3d": {
                                "label": "Option 3D",
                                "designation": "FEATURE",
                                "designation_description": ""
                            },
                            "option3d-oct": {
                                "label": "Option 3D OCT",
                                "designation": "FEATURE",
                                "designation_description": ""
                            }
                        },
                        "model_number": "750",
                        "full_name": "Artevo 750",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": true,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "instrument_codes": ["6229", "6230", "6231", "6232"]
                    },
                    "800": {
                        "model_serials": {},
                        "model_number": "800",
                        "full_name": "Artevo 800",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "instrument_codes": ["6227", "6228"]
                    },
                    "850": {
                        "model_serials": {},
                        "subsets": {
                            "option2d": {
                                "label": "Option 2D",
                                "designation": "FEATURE",
                                "designation_description": ""
                            },
                            "option2d-oct": {
                                "label": "Option 2D OCT",
                                "designation": "FEATURE",
                                "designation_description": ""
                            },
                            "option3d": {
                                "label": "Option 3D",
                                "designation": "FEATURE",
                                "designation_description": ""
                            },
                            "option3d-oct": {
                                "label": "Option 3D OCT",
                                "designation": "FEATURE",
                                "designation_description": ""
                            }
                        },
                        "model_number": "850",
                        "full_name": "Artevo 850",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": true,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "instrument_codes": ["6229"]
                    }
                }
            },
            "atlas": {
                "product": {
                    "name": "ATLAS",
                    "short_name": "Atlas",
                    "identifier": "atlas",
                    "class": "Corneal Tomographer",
                    "description": "",
                    "url": "https://www.zeiss.com/meditec/en/products/zeiss-corneal-topographers/zeiss-atlas-500-corneal-topographer-us.html",
                    "modality": "OPM"
                },
                "support": {
                    "active_models": true,
                    "team": "refractive",
                    "onenote_link": "https://zeiss-my.sharepoint.com/personal/don_renfrow_zeiss_com/_layouts/OneNote.aspx?id=%2Fpersonal%2Fdon_renfrow_zeiss_com%2FDocuments%2FTech%20Support%20OneNote&wd=target%28ATLAS%20-%20ALL%20MODELS.one%7C55267EB8-747F-4BE2-B634-787A001395CE%2F%29"
                },
                "models": {
                    "meta": {
                        "sort_method": "numeric",
                        "exemptions": ["serial"]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "500": {
                        "model_serials": {},
                        "model_number": "500",
                        "full_name": "ATLAS 500",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": true,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "instrument_codes": []
                    },
                    "991": {
                        "model_serials": {},
                        "model_number": "991",
                        "full_name": "ATLAS 991",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "11-01-2009",
                        "eogs_date": "11-01-2009",
                        "eos_url": "",
                        "instrument_codes": []
                    },
                    "992": {
                        "model_serials": {},
                        "model_number": "992",
                        "full_name": "ATLAS 992",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "11-01-2009",
                        "eogs_date": "11-01-2009",
                        "eos_url": "",
                        "instrument_codes": []
                    },
                    "993": {
                        "model_serials": {},
                        "model_number": "993",
                        "full_name": "ATLAS 993",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "12-01-2018",
                        "eogs_date": "12-01-2018",
                        "eos_url": "",
                        "instrument_codes": []
                    },
                    "995": {
                        "model_serials": {},
                        "model_number": "995",
                        "full_name": "ATLAS 995",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "12-01-2018",
                        "eogs_date": "12-01-2018",
                        "eos_url": "",
                        "instrument_codes": []
                    },
                    "9000": {
                        "model_serials": {
                            "format": "<model>-<sequence>",
                            "example": "9000-1234",
                            "software_location": "",
                            "hardware_location": "",
                            "prefix_format": "9000-",
                            "sequence_format": "4 digits"
                        },
                        "subsets": {
                            "gen1": {
                                "label": "Generation 1",
                                "designation": "SERIAL",
                                "designation_start": "9000-0001",
                                "designation_end": "9000-2376"
                            },
                            "gen2": {
                                "label": "Generation 2",
                                "designation": "SERIAL",
                                "designation_start": "9000-2377",
                                "designation_end": "9000-4443"
                            }
                        },
                        "model_number": "9000",
                        "full_name": "ATLAS 9000",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "08-27-2024",
                        "eos_url": "",
                        "instrument_codes": ["8111"]
                    }
                }
            },
            "cirrus-oct": {
                "product": {
                    "name": "CIRRUS HD-OCT",
                    "short_name": "Cirrus OCT",
                    "identifier": "cirrus-oct",
                    "class": "Optical Coherence Tomographer",
                    "description": "",
                    "url": "https://www.zeiss.com/meditec/en/products/optical-coherence-tomography-devices.html",
                    "modality": "OPT"
                },
                "support": {
                    "active_models": true,
                    "team": "oct",
                    "onenote_link": "https://zeiss-my.sharepoint.com/personal/don_renfrow_zeiss_com/_layouts/OneNote.aspx?id=%2Fpersonal%2Fdon_renfrow_zeiss_com%2FDocuments%2FTech%20Support%20OneNote&wd=target%28CIRRUS%20OCT%20ALL%20MODELS.one%7C4AEE7F34-6ABD-4543-BC96-64DDD1137CE2%2F%29"
                },
                "models": {
                    "meta": {
                        "sort_method": "numeric",
                        "exemptions": ["serial"]
                    },
                    "serial": {
                        "format": "<model>-<sequence>",
                        "example": "6000-12345",
                        "software_location": "Help > About",
                        "hardware_location": "Behind connector panel on baseplate",
                        "prefix_format": "",
                        "sequence_format": "4+ digits"
                    },
                    "400": {
                        "model_serials": {
                            "format": "400-<sequence>",
                            "example": "400-12345",
                            "prefix_format": "400-",
                            "sequence_format": "4+ digits"
                        },
                        "subsets": {},
                        "model_number": "400",
                        "full_name": "Cirrus HD-OCT 400",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "04-30-2022",
                        "eogs_date": "04-2022",
                        "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/final_eos_cirrus_400_4000.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/final_eos_cirrus_400_4000.pdf",
                        "instrument_codes": ["8707"]
                    },
                    "4000": {
                        "model_serials": {
                            "format": "4000-<sequence>",
                            "example": "4000-12345",
                            "prefix_format": "4000-",
                            "sequence_format": "4+ digits"
                        },
                        "subsets": {},
                        "model_number": "4000",
                        "full_name": "Cirrus HD-OCT 4000",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "04-30-2022",
                        "eogs_date": "04-30-2022",
                        "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/final_eos_cirrus_400_4000.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/final_eos_cirrus_400_4000.pdf",
                        "instrument_codes": ["8706"]
                    },
                    "500": {
                        "model_serials": {
                            "format": "500-<sequence>",
                            "example": "500-12345",
                            "prefix_format": "500-",
                            "sequence_format": "4+ digits"
                        },
                        "subsets": {},
                        "model_number": "500",
                        "full_name": "Cirrus HD-OCT 500",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "instrument_codes": ["8709"]
                    },
                    "5000": {
                        "model_serials": {
                            "format": "5000-<sequence>",
                            "example": "5000-12345",
                            "prefix_format": "5000-",
                            "sequence_format": "4+ digits"
                        },
                        "subsets": {},
                        "model_number": "5000",
                        "full_name": "Cirrus HD-OCT 5000",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "instrument_codes": ["8708"]
                    },
                    "6000": {
                        "model_serials": {
                            "format": "6000-<sequence>",
                            "example": "6000-12345",
                            "prefix_format": "6000-",
                            "sequence_format": "4+ digits"
                        },
                        "subsets": {},
                        "model_number": "6000",
                        "full_name": "Cirrus HD-OCT 6000",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "instrument_codes": ["8714"]
                    }
                }
            },
            "cirrus-photo": {
                "product": {
                    "name": "CIRRUS Photo",
                    "short_name": "Cirrus Photo",
                    "identifier": "cirrus-photo",
                    "class": "Fundus Camera Optical Coherence Tomographer",
                    "description": "",
                    "url": "",
                    "modality": "OP"
                },
                "support": {
                    "active_models": true,
                    "team": "imaging",
                    "onenote_link": "https://zeiss-my.sharepoint.com/personal/don_renfrow_zeiss_com/_layouts/OneNote.aspx?id=%2Fpersonal%2Fdon_renfrow_zeiss_com%2FDocuments%2FTech%20Support%20OneNote&wd=target%28CIRRUS%20PHOTO.one%7C35611F14-8D51-4252-ACD9-31960C4D37BC%2F%29"
                },
                "models": {
                    "meta": {
                        "sort_method": "numeric",
                        "exemptions": ["serial"]
                    },
                    "serial": {
                        "format": "1<6-digit number>",
                        "example": "1081607",
                        "software_location": "",
                        "hardware_location": "Back of device, near the bottom",
                        "prefix_format": "1",
                        "sequence_format": "6 digits"
                    },
                    "600": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "600",
                        "full_name": "Cirrus Photo 600",
                        "launch_date": "08-01-2010",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "03-30-2024",
                        "eos_url": "",
                        "instrument_codes": ["9601"]
                    },
                    "800": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "800",
                        "full_name": "Cirrus Photo 800",
                        "launch_date": "03-01-2010",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "03-30-2024",
                        "eos_url": "",
                        "instrument_codes": ["9602"]
                    },
                }
            },
            "clarus": {
                "product": {
                    "name": "CLARUS",
                    "short_name": "Clarus",
                    "identifier": "clarus",
                    "class": "Fundus Camera",
                    "description": "",
                    "url": "https://www.zeiss.com/meditec/en/products/retinal-cameras.html",
                    "modality": "OP"
                },
                "support": {
                    "active_models": true,
                    "team": "imaging",
                    "onenote_link": "https://zeiss-my.sharepoint.com/personal/don_renfrow_zeiss_com/_layouts/OneNote.aspx?id=%2Fpersonal%2Fdon_renfrow_zeiss_com%2FDocuments%2FTech%20Support%20OneNote&wd=target%28CLARUS.one%7C7BCEC8B3-1FD0-4902-B626-985C8C9E35C7%2F%29"
                },
                "models": {
                    "meta": {
                        "sort_method": "numeric",
                        "exemptions": ["serial"]
                    },
                    "serial": {
                        "format": "CL<model>-<sequence number>",
                        "example": "CL700-12345",
                        "software_location": "Settings > System Information",
                        "hardware_location": "Below device head, in front of joystick",
                        "prefix_format": "CL<model>",
                        "sequence_format": "4+ digits"
                    },
                    "500": {
                        "model_serials": {
                            "format": "CL500-<sequence>",
                            "example": "CL500-1234",
                            "prefix_format": "CL500-",
                            "sequence_format": "4+ digits"
                        },
                        "subsets": {},
                        "model_number": "500",
                        "full_name": "Clarus 500",
                        "launch_date": "11-01-2018",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "instrument_codes": ["9603"]
                    },
                    "700": {
                        "model_serials": {
                            "format": "CL700-<sequence>",
                            "example": "CL700-1234",
                            "prefix_format": "CL700-",
                            "sequence_format": "4+ digits"
                        },
                        "subsets": {},
                        "model_number": "700",
                        "full_name": "Clarus 700",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "instrument_codes": ["9604"]
                    }
                }
            },
            "fdt": {
                "product": {
                    "name": "FDT",
                    "short_name": "FDT",
                    "identifier": "fdt",
                    "class": "Visual Field",
                    "description": "",
                    "url": "",
                    "modality": "OPV"
                },
                "support": {
                    "active_models": true,
                    "team": "perimetry",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "numeric",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "710": {
                        "model_serials": {
                            "format": "<year>111<sequence number>",
                            "example": "20081111234",
                            "prefix_format": "<year>111",
                            "sequence_format": "4 digits"
                        },
                        "subsets": {},
                        "model_number": "710",
                        "full_name": "FDT 710",
                        "supported": true,
                        "required_escalation": false,
                        "launch_date": "",
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "instrument_codes": ["8521"]
                    },
                    "715": {
                        "model_serials": {
                            "format": "9<sequence number>",
                            "example": "9123456",
                            "prefix_format": "9",
                            "sequence_format": "6+ digits"
                        },
                        "subsets": {},
                        "model_number": "715",
                        "full_name": "FDT 715",
                        "supported": false,
                        "required_escalation": false,
                        "launch_date": "",
                        "eos_date": "03-31-2021",
                        "eogs_date": "",
                        "eos_url": "",
                        "instrument_codes": ["8522"]
                    }
                }
            },
            "fundus-camera": {
                "product": {
                    "name": "Fundus Camera",
                    "short_name": "Fundus",
                    "identifier": "fundus-camera",
                    "class": "Fundus",
                    "description": "",
                    "url": "",
                    "modality": "OP"
                },
                "support": {
                    "active_models": true,
                    "team": "imaging",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "ff4": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "FF 4",
                        "full_name": "Fundus Camera FF 4",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "12-01-2003",
                        "eogs_date": "12-01-2003",
                        "eos_url": "",
                        "instrument_codes": []
                    },
                    "ff5": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "FF 5",
                        "full_name": "Fundus Camera FF 5",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "12-01-2003",
                        "eogs_date": "12-01-2003",
                        "eos_url": "",
                        "instrument_codes": ["9302"]
                    },
                    "ff450": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "FF 450",
                        "full_name": "Fundus Camera FF 450",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "12-01-2015",
                        "eogs_date": "12-01-2003",
                        "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/end-of-support-notice_ff450_vp430450_mcaf_02_01_11.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/end-of-support-notice_ff450_vp430450_mcaf_02_01_11.pdf",
                        "instrument_codes": ["9302"]
                    },
                    "ff450iru": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "FF 450 IRu",
                        "full_name": "Fundus Camera FF 450 IRu",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "12-01-2015",
                        "eogs_date": "12-01-2003",
                        "eos_url": "",
                        "instrument_codes": []
                    },
                    "ff450plus": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "FF 450+",
                        "full_name": "Fundus Camera FF 450+",
                        "launch_date": "04-01-2001",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "instrument_codes": ["9303"]
                    },
                    "ff450ir": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "FF 450 IR",
                        "full_name": "Fundus Camera FF 450 IR",
                        "launch_date": "04-01-2001",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "12-01-2015",
                        "eogs_date": "12-01-2010",
                        "eos_url": "",
                        "instrument_codes": ["9303"]
                    },
                    "ff450plusiru": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "FF 450+ IRu",
                        "full_name": "Fundus Camera FF 450+ IRu",
                        "launch_date": "04-01-2001",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "instrument_codes": []
                    },
                    "FK 30": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "FK 30",
                        "full_name": "Fundus Camera FK 30",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "12-01-2003",
                        "eogs_date": "12-01-2003",
                        "eos_url": "",
                        "instrument_codes": []
                    },
                    "RC 310": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "RC 310",
                        "full_name": "Fundus Camera RC 310",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "12-01-2003",
                        "eogs_date": "12-01-2003",
                        "eos_url": "",
                        "instrument_codes": []
                    }
                }
            },
            "gdx": {
                "product": {
                    "name": "GDx",
                    "short_name": "GDx",
                    "identifier": "gdx",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": "OPM"
                },
                "support": {
                    "active_models": false,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "GDX<sequence number>",
                        "example": "GDX1234",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "GDX",
                        "sequence_format": "4+ digits"
                    },
                    "vcc": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "VCC",
                        "full_name": "GDX VCC",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["8801"]
                    },
                }
            },
            "hark": {
                "product": {
                    "name": "Hark",
                    "short_name": "Hark",
                    "identifier": "hark",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": ""
                },
                "support": {
                    "active_models": false,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "599": {
                        "model_serials": {
                            "format": "599-<sequence number>",
                            "example": "599-1234",
                            "sequence_format": "4+ digits"
                        },
                        "subsets": {},
                        "model_number": "599",
                        "full_name": "Hark 599",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["8304"]
                    }
                }
            },
            "hfa": {
                "product": {
                    "name": "Humphrey Field Analyzer",
                    "short_name": "HFA",
                    "identifier": "hfa",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": "OPV"
                },
                "support": {
                    "active_models": true,
                    "team": "perimetry",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "<model>-<sequence number>",
                        "example": "860-12345",
                        "software_location": "Settings > System Information",
                        "hardware_location": "On back of device, in the recessed panel",
                        "prefix_format": "",
                        "sequence_format": "5+ digits"
                    },
                    "740i": {
                        "model_serials": {
                            "format": "740i-<sequence number>",
                            "example": "740i-1234",
                            "sequence_format": "4+ digits"
                        },
                        "subsets": {},
                        "model_number": "740i",
                        "full_name": "HFA 740i",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "01-04-2022",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["8514"]
                    },
                    "750i": {
                        "model_serials": {
                            "format": "750i-<sequence number>",
                            "example": "750i-1234",
                            "sequence_format": "4+ digits"
                        },
                        "subsets": {},
                        "model_number": "750i",
                        "full_name": "HFA 750i",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "09-17-2024",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["8520"]
                    },
                    "730": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "730",
                        "full_name": "HFA II 730",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "03-01-2008",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["8518"]
                    },
                    "735": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "735",
                        "full_name": "HFA II 735",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "03-01-2008",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["8510"]
                    },
                    "740": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "740",
                        "full_name": "HFA II 740",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "03-01-2008",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["8514"]
                    },
                    "745": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "745",
                        "full_name": "HFA II 745",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "03-01-2008",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["8517"]
                    },
                    "750": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "750",
                        "full_name": "HFA II 750",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "03-01-2008",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["8520"]
                    },
                    "830": {
                        "model_serials": {
                            "format": "830-<sequence>",
                            "example": "830-12345",
                            "prefix_format": "830-",
                            "sequence_format": "5+ digits"
                        },
                        "subsets": {},
                        "model_number": "830",
                        "full_name": "HFA3 830",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "https://www.zeiss.com/meditec/en/products/perimetry/humphrey-field-analyzer-3.html",
                        "instrument_codes": ["8524"]
                    },
                    "840": {
                        "model_serials": {
                            "format": "840-<sequence>",
                            "example": "840-12345",
                            "prefix_format": "840-",
                            "sequence_format": "5+ digits"
                        },
                        "subsets": {},
                        "model_number": "840",
                        "full_name": "HFA3 840",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "06-30-2025",
                        "eos_url": "",
                        "model_url": "https://www.zeiss.com/meditec/en/products/perimetry/humphrey-field-analyzer-3.html",
                        "instrument_codes": ["8525"]
                    },
                    "850": {
                        "model_serials": {
                            "format": "850-<sequence>",
                            "example": "850-12345",
                            "prefix_format": "850-",
                            "sequence_format": "5+ digits"
                        },
                        "subsets": {},
                        "model_number": "850",
                        "full_name": "HFA3 850",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "https://www.zeiss.com/meditec/en/products/perimetry/humphrey-field-analyzer-3.html",
                        "instrument_codes": ["8526"]
                    },
                    "860": {
                        "model_serials": {
                            "format": "860-<sequence>",
                            "example": "860-12345",
                            "prefix_format": "860-",
                            "sequence_format": "5+ digits"
                        },
                        "subsets": {},
                        "model_number": "860",
                        "full_name": "HFA3 860",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "https://www.zeiss.com/meditec/en/products/perimetry/humphrey-field-analyzer-3.html",
                        "instrument_codes": ["8527"]
                    }
                }
            },
            "iolmaster": {
                "product": {
                    "name": "IOLMaster",
                    "short_name": "IOLMaster",
                    "identifier": "iolmaster",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": "OT, OAM"
                },
                "support": {
                    "active_models": true,
                    "team": "refractive",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },"3": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "3",
                        "full_name": "IOLMaster 3",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "12-01-2013",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9201"]
                    },
                    "5": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "5",
                        "full_name": "IOLMaster 5",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "03-01-2017",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9202"]
                    },
                    "500": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "500",
                        "full_name": "IOLMaster 500",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9206"]
                    },
                    "700": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "700",
                        "full_name": "IOLMaster 700",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9208"]
                    }
                }
            },
            "iort": {
                "product": {
                    "name": "IORT",
                    "short_name": "IORT",
                    "identifier": "iort",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": ""
                },
                "support": {
                    "active_models": false,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    }
                }
            },
            "intrabeam": {
                "product": {
                    "name": "Intrabeam",
                    "short_name": "Intrabeam",
                    "identifier": "intrabeam",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": ""
                },
                "support": {
                    "active_models": true,
                    "team": "surgical",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "600": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "600",
                        "full_name": "Intrabeam 600",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6405"]
                    }
                }
            },
            "kinevo": {
                "product": {
                    "name": "KINEVO",
                    "short_name": "Kinevo",
                    "identifier": "kinevo",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": ""
                },
                "support": {
                    "active_models": true,
                    "team": "surgical",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },"900": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "900",
                        "full_name": "Kinevo 900",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6223"]
                    },
                    "900s": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "900 S",
                        "full_name": "Kinevo 900 S",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": true,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6409"]
                    }
                }
            },
            "lensometer": {
                "product": {
                    "name": "Lensometer",
                    "short_name": "Lensometer",
                    "identifier": "lensometer",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": "",
                    "instrument_codes": []
                },
                "support": {
                    "active_models": false,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    }
                }
            },
            "loopes": {
                "product": {
                    "name": "Loopes",
                    "short_name": "Loopes",
                    "identifier": "loopes",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": "",
                    "instrument_codes": []
                },
                "support": {
                    "active_models": false,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    }
                }
            },
            "lumera": {
                "product": {
                    "name": "Lumera",
                    "short_name": "Lumera",
                    "identifier": "lumera",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": "",
                    "alias_reference": "opmi"
                },
                "support": {
                    "active_models": true,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "i": {
                        "model_serials": {
                            "format": "6633<sequence>",
                            "example": "6633123456",
                            "prefix_format": "6633",
                            "sequence_format": "6+ digits"
                        },
                        "subsets": {},
                        "model_number": "Lumera i",
                        "full_name": "OPMI Lumera i",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6216"]
                    },
                    "t": {
                        "model_serials": {
                            "format": "6215<sequence>",
                            "example": "6215123456",
                            "prefix_format": "6215",
                            "sequence_format": "6+ digits"
                        },
                        "subsets": {},
                        "model_number": "Lumera T",
                        "full_name": "OPMI Lumera T",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6215"]
                    },
                    "300": {
                        "model_serials": {
                            "format": "6137<sequence>",
                            "example": "6137101234",
                            "prefix_format": "6137",
                            "sequence_format": "6+ digits"
                        },
                        "subsets": {},
                        "model_number": "Lumera 300",
                        "full_name": "OPMI Lumera 300",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6137"]
                    },
                    "700": {
                        "model_serials": {
                            "format": "6634<sequence>",
                            "example": "6634101234",
                            "prefix_format": "6634",
                            "sequence_format": "6+ digits"
                        },
                        "subsets": {},
                        "model_number": "Lumera 700",
                        "full_name": "OPMI Lumera 700",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6217", "7210"]
                    },
                }
            },
            "matrix": {
                "product": {
                    "name": "Matrix",
                    "short_name": "Matrix",
                    "identifier": "matrix",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": "OPV"
                },
                "support": {
                    "active_models": true,
                    "team": "perimetry",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "Depends on model",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "715": {
                        "model_serials": {
                            "format": "<manufacture year><sequence>",
                            "example": "2005101234567",
                            "prefix_format": "2",
                            "sequence_format": "7+ digits"
                        },
                        "subsets": {},
                        "model_number": "715",
                        "full_name": "Matrix FDT 715",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "03-01-2021",
                        "eogs_date": "",
                        "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/final_cap-en-us_31_028_0005i_eos_matrix_715.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/final_cap-en-us_31_028_0005i_eos_matrix_715.pdf",
                        "model_url": "",
                        "instrument_codes": ["8522"]
                    },
                    "800": {
                        "model_serials": {
                            "format": "5000000<sequence>",
                            "example": "50000001234",
                            "software_location": "F6 from the menu",
                            "hardware_location": "Underneath the instrument",
                            "prefix_format": "5000000",
                            "sequence_format": "4+ digits"
                        },
                        "subsets": {},
                        "model_number": "800",
                        "full_name": "Matrix 800",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["8523"]
                    }
                }
            },
            "mel": {
                "product": {
                    "name": "MEL",
                    "short_name": "MEL",
                    "identifier": "mel",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": "",
                    "alias_reference": "visumax"
                },
                "support": {
                    "active_models": true,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "80": {
                        "model_serials": {
                            "format": "1<sequence>",
                            "example": "1123456",
                            "prefix_format": "1",
                            "sequence_format": "6 digits"
                        },
                        "subsets": {},
                        "model_number": "MEL 80",
                        "full_name": "VisuMax MEL 80",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9502"]
                    },
                    "90": {
                        "model_serials": {
                            "format": "9507<sequence>",
                            "example": "9507123456",
                            "prefix_format": "9507",
                            "sequence_format": "6 digits"
                        },
                        "subsets": {},
                        "model_number": "MEL 90",
                        "full_name": "MEL 90",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9507"]
                    }
                }
            },
            "opmi": {
                "product": {
                    "name": "OPMI",
                    "short_name": "OPMI",
                    "identifier": "opmi",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": ""
                },
                "support": {
                    "active_models": true,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "11i": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "11I",
                        "full_name": "OPMI 11I",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6025"]
                    },
                    "19": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "19",
                        "full_name": "OPMI 19",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6027"]
                    },
                    "1fc": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "1 FC",
                        "full_name": "OPMI 1 FC",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6013"]
                    },
                    "6": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "6",
                        "full_name": "OPMI 6",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": []
                    },
                    "lumera300": {
                        "model_serials": {
                            "format": "6137<sequence>",
                            "example": "6137101234",
                            "prefix_format": "6137",
                            "sequence_format": "6+ digits"
                        },
                        "subsets": {},
                        "model_number": "Lumera 300",
                        "full_name": "OPMI Lumera 300",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6137"]
                    },
                    "lumerai": {
                        "model_serials": {
                            "format": "6633<sequence>",
                            "example": "6633123456",
                            "prefix_format": "6633",
                            "sequence_format": "6+ digits"
                        },
                        "subsets": {},
                        "model_number": "Lumera i",
                        "full_name": "OPMI Lumera i",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6216"]
                    },
                    "lumerat": {
                        "model_serials": {
                            "format": "6215<sequence>",
                            "example": "6215123456",
                            "prefix_format": "6215",
                            "sequence_format": "6+ digits"
                        },
                        "subsets": {},
                        "model_number": "Lumera T",
                        "full_name": "OPMI Lumera T",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6215"]
                    },
                    "lumera700": {
                        "model_serials": {
                            "format": "6634<sequence>",
                            "example": "6634101234",
                            "prefix_format": "6634",
                            "sequence_format": "6+ digits"
                        },
                        "subsets": {},
                        "model_number": "Lumera 700",
                        "full_name": "OPMI Lumera 700",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6217", "7210"]
                    },
                    "neuro": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "Neuro",
                        "full_name": "OPMI Neuro",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6202"]
                    },
                    "pico": {
                        "model_serials": {
                            "format": "6<sequence>",
                            "example": "6123456789",
                            "prefix_format": "6",
                            "sequence_format": "9 digits"
                        },
                        "subsets": {},
                        "model_number": "Pico",
                        "full_name": "OPMI Pico",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6030"]
                    },
                    "pentero": {
                        "model_serials": {
                            "format": "4<sequence>",
                            "example": "412345",
                            "prefix_format": "4",
                            "sequence_format": "5 digits"
                        },
                        "subsets": {},
                        "model_number": "Pentero",
                        "full_name": "OPMI Pentero Complete",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "09-01-2016",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6211"]
                    },
                    "pentero800": {
                        "model_serials": {
                            "format": "66417<sequence>",
                            "example": "6641712345",
                            "prefix_format": "66417",
                            "sequence_format": "5 digits"
                        },
                        "subsets": {},
                        "model_number": "Pentero 800",
                        "full_name": "OPMI Pentero 800",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6222"]
                    },
                    "pentero800s": {
                        "model_serials": {
                            "format": "6410<sequence>",
                            "example": "6410123456",
                            "prefix_format": "6410",
                            "sequence_format": "6 digits"
                        },
                        "subsets": {},
                        "model_number": "Pentero 800 S",
                        "full_name": "Pentero 800 S",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6410"]
                    },
                    "pentero900": {
                        "model_serials": {
                            "format": "6637<sequence>",
                            "example": "6637123456",
                            "prefix_format": "6637",
                            "sequence_format": "6 digits"
                        },
                        "subsets": {},
                        "model_number": "Pentero 900",
                        "full_name": "Pentero 900",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6219"]
                    },
                    "sensera": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "Sensera",
                        "full_name": "OPMI Sensera",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6210"]
                    },
                    "vario700": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "VARIO 700",
                        "full_name": "OPMI VARIO 700",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6218"]
                    }
                }
            },
            "pentero": {
                "product": {
                    "name": "PENTERO",
                    "short_name": "Pentero",
                    "identifier": "pentero",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": "GM",
                    "alias_reference": "opmi"
                },
                "support": {
                    "active_models": true,
                    "team": "surgical",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "complete": {
                        "model_serials": {
                            "format": "4<sequence>",
                            "example": "412345",
                            "prefix_format": "4",
                            "sequence_format": "5 digits"
                        },
                        "subsets": {},
                        "model_number": "Pentero",
                        "full_name": "OPMI Pentero Complete",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "09-01-2016",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6211"]
                    },
                    "800": {
                        "model_serials": {
                            "format": "66417<sequence>",
                            "example": "6641712345",
                            "prefix_format": "66417",
                            "sequence_format": "5 digits"
                        },
                        "subsets": {},
                        "model_number": "Pentero 800",
                        "full_name": "OPMI Pentero 800",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6222"]
                    },
                    "800s": {
                        "model_serials": {
                            "format": "6410<sequence>",
                            "example": "6410123456",
                            "prefix_format": "6410",
                            "sequence_format": "6 digits"
                        },
                        "subsets": {},
                        "model_number": "Pentero 800 S",
                        "full_name": "Pentero 800 S",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6410"]
                    },
                    "900": {
                        "model_serials": {
                            "format": "6637<sequence>",
                            "example": "6637123456",
                            "prefix_format": "6637",
                            "sequence_format": "6 digits"
                        },
                        "subsets": {},
                        "model_number": "Pentero 900",
                        "full_name": "Pentero 900",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6219"]
                    }
                }
            },
            "pico": {
                "product": {
                    "name": "Pico",
                    "short_name": "Pico",
                    "identifier": "pico",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": "",
                    "instrument_codes": [],
                    "alias_reference": "opmi"
                },
                "support": {
                    "active_models": true,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "6<sequence>",
                        "example": "6123456789",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "6",
                        "sequence_format": "9 digits"
                    },
                    "pico": {
                        "model_serials": {
                            "format": "6<sequence>",
                            "example": "6123456789",
                            "prefix_format": "6",
                            "sequence_format": "9 digits"
                        },
                        "subsets": {},
                        "model_number": "Pico",
                        "full_name": "OPMI Pico",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6030"]
                    },
                }
            },
            "plex-elite": {
                "product": {
                    "name": "PLEXElite",
                    "short_name": "Plex Elite",
                    "identifier": "plex-elite",
                    "class": "",
                    "description": "PLEX Elite Model 9000, the next generation OCT Angiography imager, is the ultimate high-end instrument for OCT Angiography and posterior segment imaging for research applications. The PLEX Elite Model 9000 is designed to support retina specialist’s retinal imaging needs during clinic and research projects. This research diagnostic instrument combines state-of-the-art new non-invasive vasculature imaging (OCT Angiography), wider field of view OCT imaging of posterior segments with ultra-high definition scans tailored to help with advancement of retinal research.",
                    "url": "",
                    "modality": "OCT"
                },
                "support": {
                    "active_models": true,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "<model>-<sequence>",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "PL",
                        "sequence_format": ""
                    },
                    "9000": {
                        "model_serials": {
                            "format": "PL9000-<sequence>",
                            "example": "PL9000-1234",
                            "software_location": "",
                            "hardware_location": "Back of instrument above the computer access panel",
                            "prefix_format": "PL9000-",
                            "sequence_format": "4+ digits"
                        },
                        "subsets": {},
                        "model_number": "9000",
                        "full_name": "Plex Elite 9000",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_code": ["8711"]
                    }
                }
            },
            "quatera": {
                "product": {
                    "name": "QUATERA",
                    "short_name": "Quatera",
                    "identifier": "quatera",
                    "class": "",
                    "description": "",
                    "url": "https://www.zeiss.com/meditec/en/c/quatera-700/zeiss-quatera-700-ensures-chamber-stability.html",
                    "modality": ""
                },
                "support": {
                    "active_models": true,
                    "team": "surgical",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "numeric",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "700": {
                        "model_serials": {
                            "format": "6407<sequence>",
                            "example": "6407123456",
                            "prefix_format": "6407",
                            "sequence_format": "6 digits"
                        },
                        "subsets": {},
                        "model_number": "700",
                        "full_name": "Quatera 700",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": true,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6407"]
                    }
                }
            },
            "quietist": {
                "product": {
                    "name": "Quietist",
                    "short_name": "Quietist",
                    "identifier": "quietist",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": "",
                    "instrument_codes": []
                },
                "support": {
                    "active_models": false,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    }
                }
            },
            "resight": {
                "product": {
                    "name": "Resight",
                    "short_name": "Resight",
                    "identifier": "resight",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": "",
                    "instrument_codes": []
                },
                "support": {
                    "active_models": true,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "500": {
                        "model_serials": {
                            "format": "1<sequence>",
                            "example": "112345",
                            "prefix_format": "1",
                            "sequence_format": "5 digits"
                        },
                        "subsets": {},
                        "model_number": "500",
                        "full_name": "Resight 500",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "instrument_codes": ["7202"]
                    },
                    "700": {
                        "model_serials": {
                            "format": "1<sequence>",
                            "example": "112345",
                            "prefix_format": "1",
                            "sequence_format": "5 digits"
                        },
                        "subsets": {},
                        "model_number": "700",
                        "full_name": "Resight 700",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "instrument_codes": ["7203"]
                    }
                }
            },
            "slit-lamp": {
                "product": {
                    "name": "Slit Lamp",
                    "short_name": "Slit Lamp",
                    "identifier": "slit-lamp",
                    "class": "SLit Lamp",
                    "description": "",
                    "url": "https://www.zeiss.com/meditec/en/products/basic-diagnostic-devices.html",
                    "modality": ""
                },
                "support": {
                    "active_models": true,
                    "team": "imaging",
                    "onenote_link": "https://zeiss-my.sharepoint.com/personal/don_renfrow_zeiss_com/_layouts/OneNote.aspx?id=%2Fpersonal%2Fdon_renfrow_zeiss_com%2FDocuments%2FTech%20Support%20OneNote&wd=target%28SLIT%20LAMPS%20ALL%20MODELS.one%7C9135D4D7-498D-4713-B3B9-70FD96A38A88%2F%29"
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "10": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "10",
                        "full_name": "10 SL",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "03-01-2002",
                        "eogs_date": "03-01-2002",
                        "eos_url": "",
                        "instrument_codes": []
                    },
                    "10-O": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "10",
                        "full_name": "10 SL/O",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "03-01-2002",
                        "eogs_date": "03-01-2002",
                        "eos_url": "",
                        "instrument_codes": []
                    },
                    "20": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "20",
                        "full_name": "20 SL",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "instrument_codes": []
                    },
                    "30": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "30",
                        "full_name": "30 SL/M",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "12-01-2006",
                        "eogs_date": "12-01-2005",
                        "eos_url": "",
                        "instrument_codes": []
                    },
                    "40": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "40",
                        "full_name": "40 SL/P",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "03-01-2005",
                        "eogs_date": "03-01-2005",
                        "eos_url": "",
                        "instrument_codes": []
                    },
                    "100": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "100/16",
                        "full_name": "SL 100/16",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "03-01-2002",
                        "eogs_date": "03-01-2002",
                        "eos_url": "",
                        "instrument_codes": []
                    },
                    "105": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "105",
                        "full_name": "SL 105",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "12-01-2012",
                        "eogs_date": "12-01-2009",
                        "eos_url": "",
                        "instrument_codes": []
                    },
                    "115": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "115 classic",
                        "full_name": "SL 115 classic",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "instrument_codes": []
                    },
                    "120": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "120",
                        "full_name": "SL 120",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "instrument_codes": []
                    },
                    "130": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "130",
                        "full_name": "SL 130",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "instrument_codes": []
                    },
                    "160": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "160",
                        "full_name": "SL 160",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "instrument_codes": []
                    },
                    "220": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "220",
                        "full_name": "SL 220",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "https://www.zeiss.com/content/dam/med-hcp/reference-master/product-portfolio/essential-line-basic-diagostics/slit-lamp-family/downloads/sl220-datasheet-en.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/sl220-datasheet-en.pdf",
                        "instrument_codes": []
                    },
                    "800": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "800",
                        "full_name": "SL 800",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "https://www.zeiss.com/meditec/en/products/basic-diagnostic-devices/zeiss-slit-lamps/sl-800.html",
                        "instrument_codes": []
                    },
                    "Photo": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "Photo-SL",
                        "full_name": "Photo-SL",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "03-01-2002",
                        "eogs_date": "03-01-2002",
                        "eos_url": "",
                        "instrument_codes": []
                    },
                    "CAM 5.0": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "CAM 5.0",
                        "full_name": "SL CAM 5.0",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "instrument_codes": []
                    }
                }
            },
            "stratus": {
                "product": {
                    "name": "Stratus",
                    "short_name": "Stratus",
                    "identifier": "stratus",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": "OPT"
                },
                "support": {
                    "active_models": false,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "3001-<sequence>",
                        "example": "3001-1234",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "3001",
                        "sequence_format": "4+ digits"
                    },
                    "stratus": {
                        "model_serials": {
                            "format": "3001-<sequence>",
                            "example": "3001-1234",
                            "prefix_format": "3001",
                            "sequence_format": "4+ digits"
                        },
                        "subsets": {},
                        "model_number": "Stratus",
                        "full_name": "Stratus OCT",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "04-30-2019",
                        "eogs_date": "",
                        "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/stratus-p3-p4_eos_letter_021318.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/stratus-p3-p4_eos_letter_021318.pdf",
                        "model_url": "",
                        "instrument_codes": ["8704"]
                    }
                }
            },
            "tivato": {
                "product": {
                    "name": "TIVATO",
                    "short_name": "Tivato",
                    "identifier": "tivato",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": ""
                },
                "support": {
                    "active_models": false,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "700": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "700",
                        "full_name": "TIVATO 700",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["6225"]
                    }
                }
            },
            "tonometer": {
                "product": {
                    "name": "Tonometer",
                    "short_name": "Tonometer",
                    "identifier": "tonometer",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": ""
                },
                "support": {
                    "active_models": false,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    }
                }
            },
            "trion": {
                "product": {
                    "name": "VISULAS Trion",
                    "short_name": "Trion",
                    "identifier": "trion",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": ""
                },
                "support": {
                    "active_models": true,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "trion": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "Trion",
                        "full_name": "VISULAS Trion",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9122", "9405"]
                    }
                }
            },
            "vcc": {
                "product": {
                    "name": "VCC",
                    "short_name": "VCC",
                    "identifier": "vcc",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": ""
                },
                "support": {
                    "active_models": false,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    }
                }
            },
            "visante": {
                "product": {
                    "name": "Visante",
                    "short_name": "Visante",
                    "identifier": "visante",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": "OPT",
                    "instrument_codes": []
                },
                "support": {
                    "active_models": false,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "<model>-<sequence>",
                        "example": "1000-1234",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "1000-",
                        "sequence_format": "4 digits"
                    },
                    "1000": {
                        "model_serials": {
                            "format": "1000-<sequence>",
                            "example": "1000-1234",
                            "prefix_format": "1000-",
                            "sequence_format": "4 digits"
                        },
                        "subsets": {},
                        "model_number": "1000",
                        "full_name": "Visante OCT",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "06-01-2020",
                        "eogs_date": "",
                        "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/end-of-support-visante-oct-1000.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/end-of-support-visante-oct-1000.pdf",
                        "model_url": "",
                        "instrument_codes": ["8705"]
                    }
                }
            },
            "visucam": {
                "product": {
                    "name": "VISUCAM",
                    "short_name": "VisuCam",
                    "identifier": "visucam",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": "OP"
                },
                "support": {
                    "active_models": true,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "Underneath the chinrest",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "lite": {
                        "model_serials": {
                            "format": "[8,9]<sequence>",
                            "example": "812345",
                            "prefix_format": "",
                            "sequence_format": "5 digits"
                        },
                        "subsets": {},
                        "model_number": "Lite",
                        "full_name": "Visucam Lite",
                        "launch_date": "05-01-2002",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "12-01-2018",
                        "eogs_date": "12-01-2017",
                        "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/visucam-1st_gen.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/visucam-1st_gen.pdf",
                        "model_url": "",
                        "instrument_codes": ["9304"]
                    },
                    "nmfa1": {
                        "model_serials": {
                            "format": "1<sequence>",
                            "example": "1123456",
                            "prefix_format": "1",
                            "sequence_format": "6 digits"
                        },
                        "subsets": {},
                        "model_number": "NM/FA1",
                        "full_name": "VISUCAM NM/FA1",
                        "launch_date": "01-01-2006",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "12-01-2018",
                        "eogs_date": "12-01-2017",
                        "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/final_eos_visucam_nmfa1.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/final_eos_visucam_nmfa1.pdf",
                        "model_url": "",
                        "instrument_codes": ["9307"]
                    },
                    "pronm1": {
                        "model_serials": {
                            "format": "1<sequence>",
                            "example": "1123456",
                            "prefix_format": "1",
                            "sequence_format": "6 digits"
                        },
                        "subsets": {},
                        "model_number": "PRO NM 1",
                        "full_name": "VISUCAM PRO NM 1",
                        "launch_date": "12-01-2010",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "01-15-2020",
                        "eos_url": "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/visucam-sunset-letter.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/visucam-sunset-letter.pdf",
                        "model_url": "",
                        "instrument_codes": ["9306"]
                    },
                    "224": {
                        "model_serials": {
                            "format": "1<sequence>",
                            "example": "1123456",
                            "prefix_format": "1",
                            "sequence_format": "6 digits"
                        },
                        "subsets": {},
                        "model_number": "224",
                        "full_name": "Visucam 224",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9315"]
                    },
                    "524": {
                        "model_serials": {
                            "format": "1<sequence>",
                            "example": "1123456",
                            "prefix_format": "1",
                            "sequence_format": "6 digits"
                        },
                        "subsets": {},
                        "model_number": "524",
                        "full_name": "Visucam 524",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9316"]
                    }
                }
            },
            "visulas": {
                "product": {
                    "name": "VISULAS",
                    "short_name": "VisuLas",
                    "identifier": "visulas",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": "",
                    "instrument_codes": ["9148", "9149"]
                },
                "support": {
                    "active_models": true,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "combi": {
                        "model_serials": {
                            "format": "[9,10]<sequence>",
                            "example": "1012345",
                            "prefix_format": "",
                            "sequence_format": "5 digits"
                        },
                        "subsets": {},
                        "model_number": "Combi",
                        "full_name": "VisuLas Combi",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": true,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9138"]
                    },
                    "yag2": {
                        "model_serials": {
                            "format": "[8,9]<sequence>",
                            "example": "812345",
                            "prefix_format": "",
                            "sequence_format": "5 digits"
                        },
                        "subsets": {},
                        "model_number": "Yag II",
                        "full_name": "VisuLas Yag II",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": true,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9105"]
                    },
                    "yag2plus": {
                        "model_serials": {
                            "format": "[8,9]<sequence>",
                            "example": "912345",
                            "prefix_format": "",
                            "sequence_format": "5 digits"
                        },
                        "subsets": {},
                        "model_number": "Yag II Plus",
                        "full_name": "VisuLas Yag II Plus Complete",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": true,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9106"]
                    },
                    "yag3": {
                        "model_serials": {
                            "format": "[9,10]<sequence>",
                            "example": "1012345",
                            "prefix_format": "",
                            "sequence_format": "5 digits"
                        },
                        "subsets": {},
                        "model_number": "Yag III",
                        "full_name": "VisuLas Yag III",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": true,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9137"]
                    },
                    "532s": {
                        "model_serials": {
                            "format": "[9,10]<sequence>",
                            "example": "912345",
                            "prefix_format": "",
                            "sequence_format": "5 digits"
                        },
                        "subsets": {},
                        "model_number": "532S",
                        "full_name": "VisuLas 532S",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": true,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9114"]
                    }
                }
            },
            "visulens": {
                "product": {
                    "name": "VISULENS",
                    "short_name": "VisuLens",
                    "identifier": "visulens",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": "LEN"
                },
                "support": {
                    "active_models": true,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "500": {
                        "model_serials": {
                            "format": "9702<sequence>",
                            "example": "9702123456",
                            "prefix_format": "9702",
                            "sequence_format": "6 digits"
                        },
                        "subsets": {},
                        "model_number": "500",
                        "full_name": "Visulens 500",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": true,
                        "eos_date": "12-31-2023",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9702"]
                    },
                    "550": {
                        "model_serials": {
                            "format": "9714<sequence>",
                            "example": "9714123456",
                            "prefix_format": "9714",
                            "sequence_format": "6 digits"
                        },
                        "subsets": {},
                        "model_number": "550",
                        "full_name": "Visulens 550",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9714"]
                    }
                }
            },
            "visumax": {
                "product": {
                    "name": "VISUMAX",
                    "short_name": "VisuMax",
                    "identifier": "visumax",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": ""
                },
                "support": {
                    "active_models": true,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "numeric",
                        "exemptions": ["serial"]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "mel80": {
                        "model_serials": {
                            "format": "1<sequence>",
                            "example": "1123456",
                            "prefix_format": "1",
                            "sequence_format": "6 digits"
                        },
                        "subsets": {},
                        "model_number": "MEL 80",
                        "full_name": "VisuMax MEL 80",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9502"]
                    },
                    "mel90": {
                        "model_serials": {
                            "format": "9507<sequence>",
                            "example": "9507123456",
                            "prefix_format": "9507",
                            "sequence_format": "6 digits"
                        },
                        "subsets": {},
                        "model_number": "MEL 90",
                        "full_name": "MEL 90",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9507"]
                    },
                    "visumax": {
                        "model_serials": {
                            "format": "1<sequence>",
                            "example": "1123456",
                            "prefix_format": "1",
                            "sequence_format": "6 digits"
                        },
                        "subsets": {},
                        "model_number": "VisuMax",
                        "full_name": "VisuMax 800",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9503"]
                    },
                    "800": {
                        "model_serials": {},
                        "subsets": {},
                        "model_number": "800",
                        "full_name": "VisuMax 800",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": true,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9511"]
                    }
                }
            },
            "visupac": {
                "product": {
                    "name": "VISUPAC",
                    "short_name": "VisuPAC",
                    "identifier": "visupac",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": "XC",
                    "instrument_codes": []
                },
                "support": {
                    "active_models": true,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "numeric",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "431": {
                        "model_serials": {
                            "format": "9750<sequence>",
                            "example": "975012345",
                            "prefix_format": "9750",
                            "sequence_format": "5 digits"
                        },
                        "subsets": {},
                        "model_number": "431",
                        "full_name": "VisuPac 431",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9402"]
                    },
                    "450": {
                        "model_serials": {
                            "format": "[79,80]<sequence>",
                            "example": "791234",
                            "prefix_format": "",
                            "sequence_format": "4 digits"
                        },
                        "subsets": {},
                        "model_number": "450",
                        "full_name": "VisuPac 450",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9403"]
                    },
                    "451": {
                        "model_serials": {
                            "format": "975<sequence>",
                            "example": "97512345",
                            "prefix_format": "975",
                            "sequence_format": "5 digits"
                        },
                        "subsets": {},
                        "model_number": "451",
                        "full_name": "VisuPac 451HR",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9403"]
                    },
                    "471": {
                        "model_serials": {
                            "format": "9750<sequence>",
                            "example": "97501234",
                            "prefix_format": "9750",
                            "sequence_format": "4 digits"
                        },
                        "subsets": {},
                        "model_number": "471",
                        "full_name": "VisuPac 471",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9404"]
                    },
                    "481": {
                        "model_serials": {
                            "format": "[9,10]<sequence>",
                            "example": "1012345",
                            "prefix_format": "",
                            "sequence_format": "5 digits"
                        },
                        "subsets": {},
                        "model_number": "481",
                        "full_name": "VisuPac 481",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9405"]
                    }
                }
            },
            "visuref": {
                "product": {
                    "name": "VISUREF",
                    "short_name": "VisuRef",
                    "identifier": "visuref",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": "AR",
                    "instrument_codes": []
                },
                "support": {
                    "active_models": true,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "100": {
                        "model_serials": {
                            "format": "K8<sequence>",
                            "example": "K8A1B2C",
                            "prefix_format": "K8",
                            "sequence_format": "5 alphanumeric"
                        },
                        "subsets": {},
                        "model_number": "100",
                        "full_name": "VISUREF 100",
                        "launch_date": "",
                        "supported": false,
                        "required_escalation": false,
                        "eos_date": "12-01-2023",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9701"]
                    },
                    "150": {
                        "model_serials": {
                            "format": "9713<sequence>",
                            "example": "9713123456",
                            "prefix_format": "9713",
                            "sequence_format": "6 digits"
                        },
                        "subsets": {},
                        "model_number": "150",
                        "full_name": "VISUREF 150",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "12-01-2023",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9713"]
                    }
                }
            },
            "visuscout": {
                "product": {
                    "name": "VISUSCOUT",
                    "short_name": "Visuscout",
                    "identifier": "visuscout",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": "OP",
                    "instrument_codes": []
                },
                "support": {
                    "active_models": true,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "100": {
                        "model_serials": {
                            "format": "<sequence>",
                            "example": "9012345A6789",
                            "prefix_format": "",
                            "sequence_format": "9-12 alphanumeric"
                        },
                        "subsets": {},
                        "model_number": "100",
                        "full_name": "VISUSCOUT 100",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": false,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9708"]
                    }
                }
            },
            "yag": {
                "product": {
                    "name": "YAG",
                    "short_name": "YAG",
                    "identifier": "yag",
                    "class": "",
                    "description": "",
                    "url": "",
                    "modality": "",
                    "alias_reference": "visulas"
                },
                "support": {
                    "active_models": true,
                    "team": "",
                    "onenote_link": ""
                },
                "models": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "serial"
                        ]
                    },
                    "serial": {
                        "format": "No serial number information available yet.",
                        "example": "",
                        "software_location": "",
                        "hardware_location": "",
                        "prefix_format": "",
                        "sequence_format": ""
                    },
                    "combi": {
                        "model_serials": {
                            "format": "[9,10]<sequence>",
                            "example": "1012345",
                            "prefix_format": "",
                            "sequence_format": "5 digits"
                        },
                        "subsets": {},
                        "model_number": "Combi",
                        "full_name": "VisuLas Combi",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": true,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9138"]
                    },
                    "2": {
                        "model_serials": {
                            "format": "[8,9]<sequence>",
                            "example": "812345",
                            "prefix_format": "",
                            "sequence_format": "5 digits"
                        },
                        "subsets": {},
                        "model_number": "Yag II",
                        "full_name": "VisuLas Yag II",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": true,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9105"]
                    },
                    "2plus": {
                        "model_serials": {
                            "format": "[8,9]<sequence>",
                            "example": "912345",
                            "prefix_format": "",
                            "sequence_format": "5 digits"
                        },
                        "subsets": {},
                        "model_number": "Yag II Plus",
                        "full_name": "VisuLas Yag II Plus Complete",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": true,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9106"]
                    },
                    "3": {
                        "model_serials": {
                            "format": "[9,10]<sequence>",
                            "example": "1012345",
                            "prefix_format": "",
                            "sequence_format": "5 digits"
                        },
                        "subsets": {},
                        "model_number": "Yag III",
                        "full_name": "VisuLas Yag III",
                        "launch_date": "",
                        "supported": true,
                        "required_escalation": true,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": "",
                        "model_url": "",
                        "instrument_codes": ["9137"]
                    }
                }
            }
        },
        "software": {
            "meta": {
                "sort_method": "alpha",
                "exemptions": [
                    "DEFAULT",
                    "meta"
                ]
            },
            "DEFAULT": {
                "product": {
                    "name": "NAME_STRING",
                    "short_name": "SHORT_NAME_STRING",
                    "identifier": "ID_STRING",
                    "class": "CLASS_STRING",
                    "description": "PRODUCT_DESCRIPTION_BLOB",
                    "url": "PRODUCT_HOME_URL_STRING",
                },
                "support": {
                    "active_items": false,
                    "team": "SUPPORT_TEAM_ID_STRING",
                    "onenote_link": "MS_ONENOTE_INDEX_URL_STRING"
                },
                "versions": {
                    "meta": {
                        "sort_method": "ALPHA|NUMERIC",
                        "exemptions": [
                            "asset_id",
                            "ASSET_ID"
                        ]
                    },
                    "asset_id": {
                        "format": "UNIVERSAL_ASSET_ID_FORMAT_STRING",
                        "example": "UNIVERSAL_ASSET_ID_EXAMPLE_STRING",
                        "software_location": "UNIVERSAL_ASSET_ID_LOCATION_IN_SOFTWARE_STRING"
                    },
                    "VERSION_ID": {
                        "subsets": {
                            "SUBSET": {
                                "label": "SUBSET_LABEL_STRING",
                                "designation": "DATE|ASSET_ID|OTHER",
                                "designation_start": "SUBSET_DESIGNATION_STARTING_POINT_STRING",
                                "designation_end": "SUBSET_DESIGNATION_ENDING_POINT_STRING"
                            }
                        },
                        "version_number": "VERSION_NUMBER_STRING",
                        "full_name": "INSTRUMENT_NAME_AND_MODEL_NUMBER_STRING",
                        "launch_date": "PRODUCT_LAUNCH_DATESTAMP",
                        "eos_date": "END_OF_SUPPORT_DATESTAMP",
                        "eogs_date": "END_OF_GUARANTEED_SUPPORT_DATESTAMP",
                        "eos_url": "END_OF_SUPPORT_DOCUMENT_URL_STRING"
                    }
                }
            },
            "forum": {
                "product": {
                    "name": "FORUM",
                    "short_name": "Forum",
                    "identifier": "forum",
                    "class": "Data Management",
                    "description": "FORUM from ZEISS is the leading ophthalmic data management solution that can be tailored to meet the needs of any practice or hospital setting. ZEISS FORUM and its clinical workplaces facilitate assessment and management of eye diseases by providing seamless data integration of diagnostic devices and ultimately guiding treatment decisions for better patient care, from a single workstation.",
                    "url": "https://www.zeiss.com/meditec/en/products/data-management-software.html",
                },
                "support": {
                    "active_items": true,
                    "team": "forum",
                    "onenote_link": "https://zeiss-my.sharepoint.com/personal/don_renfrow_zeiss_com/_layouts/OneNote.aspx?id=%2Fpersonal%2Fdon_renfrow_zeiss_com%2FDocuments%2FTech%20Support%20OneNote&wd=target%28FORUM.one%7C482C255E-12CB-4C01-8C96-4682B0AF54CB%2F%29"
                },
                "versions": {
                    "meta": {
                        "sort_method": "alpha",
                        "exemptions": [
                            "asset_id"
                        ]
                    },
                    "asset_id": {
                        "format": "UNIVERSAL_ASSET_ID_FORMAT_STRING",
                        "example": "UNIVERSAL_ASSET_ID_EXAMPLE_STRING",
                        "software_location": "UNIVERSAL_ASSET_ID_LOCATION_IN_SOFTWARE_STRING"
                    },
                    "4.4.0": {
                        "subsets": {},
                        "version_number": "4.4.0",
                        "full_name": "Forum 4.4",
                        "launch_date": "",
                        "supported": true,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": ""
                    },
                    "4.2.0": {
                        "subsets": {},
                        "version_number": "4.2.0",
                        "full_name": "Forum 4.2",
                        "launch_date": "",
                        "supported": true,
                        "eos_date": "",
                        "eogs_date": "",
                        "eos_url": ""
                    }
                }
            },
        }
    }
}
