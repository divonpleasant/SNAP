// Generic function to enable target select field and clear previously generated options
function enableAndReset(targetElement, defaultOptionsLength) {
    targetElement.removeAttribute('disabled');
    while (targetElement.options.length > defaultOptionsLength) {
        targetElement.remove(1);
    }
}

// Populate error-code based on error-group selection
function handleErrorGroup() {
    var ec_list = document.getElementById('error-code');
    var group_index = this.options[this.selectedIndex].value;
    debugmsg(4, 'group_index: ' + group_index);
    switch (group_index) {
        case 'Cloud Services':
            enableAndReset(ec_list, 1);
            ec_list.add(new Option('Login (Zeiss ID, ...)', 'Login (Zeiss ID, ...)'), ec_list.options[1]);
            ec_list.add(new Option('Cloud-Stack', 'Cloud-Stack'), ec_list.options[1]);
            ec_list.add(new Option('Calculation', 'Calculation'), ec_list.options[1]);
            break;
        case 'Computer':
            enableAndReset(ec_list, 1);
            ec_list.add(new Option('Watchdog', 'Watchdog'), ec_list.options[1]);
            ec_list.add(new Option('Speaker', 'Speaker'), ec_list.options[1]);
            ec_list.add(new Option('Service Data Module (SD, USB, ...)', 'Service Data Module (SD, USB, ...)'), ec_list.options[1]);
            ec_list.add(new Option('Network / WiFi Card', 'Network / WiFi Card'), ec_list.options[1]);
            ec_list.add(new Option('Memory / RAM', 'Memory / RAM'), ec_list.options[1]);
            ec_list.add(new Option('Media Drive (CD/DVD/Tape/etc)', 'Media Drive (CD/DVD/Tape/etc)'), ec_list.options[1]);
            ec_list.add(new Option('Mainboard', 'Mainboard'), ec_list.options[1]);
            ec_list.add(new Option('HDD / SSD', 'HDD / SSD'), ec_list.options[1]);
            ec_list.add(new Option('Graphics Card', 'Graphics Card'), ec_list.options[1]);
            ec_list.add(new Option('Frame Grabber Card', 'Frame Grabber Card'), ec_list.options[1]);
            ec_list.add(new Option('CMOS Battery', 'CMOS Battery'), ec_list.options[1]);
            break;
        case "Computer / Video Accessory":
            enableAndReset(ec_list, 1);
            ec_list.add(new Option('Wifi Adaptor', 'Wifi Adaptor'), ec_list.options[1]);
            ec_list.add(new Option('USB Extension', 'USB Extension'), ec_list.options[1]);
            ec_list.add(new Option('Removeable Device (USB / Portable HDD)', 'Removeable Device (USB / Portable HDD)'), ec_list.options[1]);
            ec_list.add(new Option('RFID Device', 'RFID Device'), ec_list.options[1]);
            ec_list.add(new Option('Printer', 'Printer'), ec_list.options[1]);
            ec_list.add(new Option('Media (CD/DVD/Tape/etc)', 'Media (CD/DVD/Tape/etc)'), ec_list.options[1]);
            ec_list.add(new Option('Keyboard / Mousen', 'Keyboard / Mouse'), ec_list.options[1]);
            ec_list.add(new Option('Display / Screen / Monitor', 'Display / Screen / Monitor'), ec_list.options[1]);
            ec_list.add(new Option('Data Injection / Overlay', 'Data Injection / Overlay'), ec_list.options[1]);
            ec_list.add(new Option('Bluetooth Adaptor', 'Bluetooth Adaptor'), ec_list.options[1]);
            ec_list.add(new Option('Barcode Scanner', 'Barcode Scanner'), ec_list.options[1]);
            ec_list.add(new Option('3D Glasses', '3D Glasses'), ec_list.options[1]);
            break;
        case 'Consumables':
            enableAndReset(ec_list, 1);
            ec_list.add(new Option('Treatment Pack', 'Treatment Pack'), ec_list.options[1]);
            ec_list.add(new Option('Treatment License', 'Treatment License'), ec_list.options[1]);
            ec_list.add(new Option('Hand Piece Tip', 'Hand Piece Tip'), ec_list.options[1]);
            ec_list.add(new Option('Fluence Test Paper', 'Fluence Test Paper'), ec_list.options[1]);
            ec_list.add(new Option('Filter', 'Filter'), ec_list.options[1]);
            ec_list.add(new Option('Drape Cover Glass', 'Drape Cover Glass'), ec_list.options[1]);
            ec_list.add(new Option('Dilator', 'Dilator'), ec_list.options[1]);
            ec_list.add(new Option('Chin Rest Paper', 'Chin Rest Paper'), ec_list.options[1]);
            ec_list.add(new Option('Bag / Bottle', 'Bag / Bottle'), ec_list.options[1]);
            ec_list.add(new Option('Aseptic Caps', 'Aseptic Caps'), ec_list.options[1]);
            break;
        case 'Customer Sales':
            enableAndReset(ec_list, 1);
            ec_list.add(new Option('User Configuration', 'User Configuration'), ec_list.options[1]);
            ec_list.add(new Option('Sterilization', 'Sterilization'), ec_list.options[1]);
            ec_list.add(new Option('Sales Support', 'Sales Support'), ec_list.options[1]);
            ec_list.add(new Option('Sales Documentation', 'Sales Documentation'), ec_list.options[1]);
            ec_list.add(new Option('Room Temperature', 'Room Temperature'), ec_list.options[1]);
            ec_list.add(new Option('Room Humidity', 'Room Humidity'), ec_list.options[1]);
            ec_list.add(new Option('Room Air Pressure', 'Room Air Pressure'), ec_list.options[1]);
            ec_list.add(new Option('Product Specification', 'Product Specification'), ec_list.options[1]);
            ec_list.add(new Option('Product Design', 'Product Design'), ec_list.options[1]);
            ec_list.add(new Option('Product Compatibility / Configuration', 'Product Compatibility / Configuration'), ec_list.options[1]);
            ec_list.add(new Option('Planning Manual', 'Planning Manual'), ec_list.options[1]);
            ec_list.add(new Option('Operation / Handling / System Care', 'Operation / Handling / System Care'), ec_list.options[1]);
            ec_list.add(new Option('Environment IT', 'Environment IT'), ec_list.options[1]);
            ec_list.add(new Option('Environment Computer', 'Environment Computer'), ec_list.options[1]);
            ec_list.add(new Option('Electrical Interference', 'Electrical Interference'), ec_list.options[1]);
            ec_list.add(new Option('Electric Power Grid', 'Electric Power Grid'), ec_list.options[1]);
            ec_list.add(new Option('Dust', 'Dust'), ec_list.options[1]);
            ec_list.add(new Option('Disenfection', 'Disenfection'), ec_list.options[1]);
            ec_list.add(new Option('Cybersecurity', 'Cybersecurity'), ec_list.options[1]);
            ec_list.add(new Option('Cleaning', 'Cleaning'), ec_list.options[1]);
            ec_list.add(new Option('Building Vibrations', 'Building Vibrations'), ec_list.options[1]);
            ec_list.add(new Option('Ambient Conditions', 'Ambient Conditions'), ec_list.options[1]);
            break;
        case 'Device Accessory':
            enableAndReset(ec_list, 1);
            ec_list.add(new Option('Stereo Coobserver', 'Stereo Coobserver'), ec_list.options[1]);
            ec_list.add(new Option('Stereo Bridge', 'Stereo Bridge'), ec_list.options[1]);
            ec_list.add(new Option('Silicone Injection', 'Silicone Injection'), ec_list.options[1]);
            ec_list.add(new Option('Remote Control', 'Remote Control'), ec_list.options[1]);
            ec_list.add(new Option('Mouth Switch', 'Mouth Switch'), ec_list.options[1]);
            ec_list.add(new Option('Micro Scissors', 'Micro Scissors'), ec_list.options[1]);
            ec_list.add(new Option('MORA Interface', 'MORA Interface'), ec_list.options[1]);
            ec_list.add(new Option('Lens Holder', 'Lens Holder'), ec_list.options[1]);
            ec_list.add(new Option('IR Receiver', 'IR Receiver'), ec_list.options[1]);
            ec_list.add(new Option('Handpiece Ultrasound', 'Handpiece Ultrasound'), ec_list.options[1]);
            ec_list.add(new Option('Handpiece Micro Inspection', 'Handpiece Micro Inspection'), ec_list.options[1]);
            ec_list.add(new Option('Handpiece Diathemy', 'Handpiece Diathemy'), ec_list.options[1]);
            ec_list.add(new Option('Flexiostill', 'Flexiostill'), ec_list.options[1]);
            ec_list.add(new Option('Flexomotion', 'Flexomotion'), ec_list.options[1]);
            ec_list.add(new Option('Dovetail', 'Dovetail'), ec_list.options[1]);
            ec_list.add(new Option('Container', 'Container'), ec_list.options[1]);
            ec_list.add(new Option('Cassette', 'Cassette'), ec_list.options[1]);
            ec_list.add(new Option('Adaptor', 'Adaptor'), ec_list.options[1]);
            break;
        case 'Electronics':
            enableAndReset(ec_list, 1);
            ec_list.add(new Option('Voltage Selector', 'Voltage Selector'), ec_list.options[1]);
            ec_list.add(new Option('Transformer', 'Transformer'), ec_list.options[1]);
            ec_list.add(new Option('Sliding Contact', 'Sliding Contact'), ec_list.options[1]);
            ec_list.add(new Option('Sensor', 'Sensor'), ec_list.options[1]);
            ec_list.add(new Option('Relay', 'Relay'), ec_list.options[1]);
            ec_list.add(new Option('Printed Circuit Board (PCB)', 'Printed Circuit Board (PCB)'), ec_list.options[1]);
            ec_list.add(new Option('Power Supply', 'Power Supply'), ec_list.options[1]);
            ec_list.add(new Option('Potentiometer', 'Potentiometer'), ec_list.options[1]);
            ec_list.add(new Option('Peltier Element', 'Peltier Element'), ec_list.options[1]);
            ec_list.add(new Option('Motor', 'Motor'), ec_list.options[1]);
            ec_list.add(new Option('MidiCore / DCU / EEPROM', 'MidiCore / DCU / EEPROM'), ec_list.options[1]);
            ec_list.add(new Option('Line Filter', 'Line Filter'), ec_list.options[1]);
            ec_list.add(new Option('Light Barrier', 'Light Barrier'), ec_list.options[1]);
            ec_list.add(new Option('LED Indicator', 'LED Indicator'), ec_list.options[1]);
            ec_list.add(new Option('Isolation Monitor', 'Isolation Monitor'), ec_list.options[1]);
            ec_list.add(new Option('Interlock', 'Interlock'), ec_list.options[1]);
            ec_list.add(new Option('Interface', 'Interface'), ec_list.options[1]);
            ec_list.add(new Option('High-Voltage Supply', 'High-Voltage Supply'), ec_list.options[1]);
            ec_list.add(new Option('Fuse', 'Fuse'), ec_list.options[1]);
            ec_list.add(new Option('Fan', 'Fan'), ec_list.options[1]);
            ec_list.add(new Option('Deflection System', 'Deflection System'), ec_list.options[1]);
            ec_list.add(new Option('Cable Routing', 'Cable Routing'), ec_list.options[1]);
            ec_list.add(new Option('Cable / Connector / Connection', 'Cable / Connector / Connection'), ec_list.options[1]);
            ec_list.add(new Option('Battery / Accumulator', 'Battery / Accumulator'), ec_list.options[1]);
            ec_list.add(new Option('Antenna', 'Antenna'), ec_list.options[1]);
            break;
        case 'End of Support':
            enableAndReset(ec_list, 1);
            ec_list.add(new Option('End of Support', 'End of Support'), ec_list.options[1]);
            break;
        case 'Mechanics':
            enableAndReset(ec_list, 1);
            ec_list.add(new Option('Weights', 'Weights'), ec_list.options[1]);
            ec_list.add(new Option('Tip', 'Tip'), ec_list.options[1]);
            ec_list.add(new Option('Table / Plate / Tray', 'Table / Plate / Tray'), ec_list.options[1]);
            ec_list.add(new Option('Surface / Paint /Lacquer', 'Surface / Paint /Lacquer'), ec_list.options[1]);
            ec_list.add(new Option('Shutter / Diaphragm / Aperture', 'Shutter / Diaphragm / Aperture'), ec_list.options[1]);
            ec_list.add(new Option('Pulley', 'Pulley'), ec_list.options[1]);
            ec_list.add(new Option('Nose Bridge', 'Nose Bridge'), ec_list.options[1]);
            ec_list.add(new Option('Mounting Aid (V-Block...)', 'Mounting Aid (V-Block...)'), ec_list.options[1]);
            ec_list.add(new Option('Magnet', 'Magnet'), ec_list.options[1]);
            ec_list.add(new Option('Lubrication (Grease / Oil)', 'Lubrication (Grease / Oil)'), ec_list.options[1]);
            ec_list.add(new Option('Lever', 'Lever'), ec_list.options[1]);
            ec_list.add(new Option('Label', 'Label'), ec_list.options[1]);
            ec_list.add(new Option('Knob / Button / Switch', 'Knob / Button / Switch'), ec_list.options[1]);
            ec_list.add(new Option('Key', 'Key'), ec_list.options[1]);
            ec_list.add(new Option('Joystick', 'Joystick'), ec_list.options[1]);
            ec_list.add(new Option('Head Band', 'Head Band'), ec_list.options[1]);
            ec_list.add(new Option('Handle / Grip', 'Handle / Grip'), ec_list.options[1]);
            ec_list.add(new Option('Guidance Element / Spindle', 'Guidance Element / Spindle'), ec_list.options[1]);
            ec_list.add(new Option('Gas Pressure Spring / Damper', 'Gas Pressure Spring / Damper'), ec_list.options[1]);
            ec_list.add(new Option('Flange', 'Flange'), ec_list.options[1]);
            ec_list.add(new Option('Fastener / Mounting / Fixation / Glue', 'Fastener / Mounting / Fixation / Glue'), ec_list.options[1]);
            ec_list.add(new Option('End Stop', 'End Stop'), ec_list.options[1]);
            ec_list.add(new Option('Drawer Inlay', 'Drawer Inlay'), ec_list.options[1]);
            ec_list.add(new Option('Deflection Block', 'Deflection Block'), ec_list.options[1]);
            ec_list.add(new Option('Cover / Housing', 'Cover / Housing'), ec_list.options[1]);
            ec_list.add(new Option('Coupling', 'Coupling'), ec_list.options[1]);
            ec_list.add(new Option('Column', 'Column'), ec_list.options[1]);
            ec_list.add(new Option('Chin Rest / Head Rest', 'Chin Rest / Head Rest'), ec_list.options[1]);
            ec_list.add(new Option('Chassis / Frame', 'Chassis / Frame'), ec_list.options[1]);
            ec_list.add(new Option('Castor', 'Castor'), ec_list.options[1]);
            ec_list.add(new Option('Carrier System', 'Carrier System'), ec_list.options[1]);
            ec_list.add(new Option('Bushing / Bearing / Slide', 'Bushing / Bearing / Slide'), ec_list.options[1]);
            ec_list.add(new Option('Brake', 'Brake'), ec_list.options[1]);
            ec_list.add(new Option('Belt/Gear', 'Belt/Gear'), ec_list.options[1]);
            break;
        case "Network / Connectivity":
            enableAndReset(ec_list, 1);
            ec_list.add(new Option('Site Control Unit', 'Site Control Unit'), ec_list.options[1]);
            ec_list.add(new Option('Router / Hub / Switch', 'Router / Hub / Switch'), ec_list.options[1]);
            ec_list.add(new Option('Printer Connection', 'Printer Connection'), ec_list.options[1]);
            ec_list.add(new Option('PACS / VNA', 'PACS / VNA'), ec_list.options[1]);
            ec_list.add(new Option('Network Isolator', 'Network Isolator'), ec_list.options[1]);
            ec_list.add(new Option('Network Bandwidth', 'Network Bandwidth'), ec_list.options[1]);
            ec_list.add(new Option('NAS / SAN', 'NAS / SAN'), ec_list.options[1]);
            ec_list.add(new Option('Internet Connection / Proxy', 'Internet Connection / Proxy'), ec_list.options[1]);
            ec_list.add(new Option('Interfaces (HL7 / EMR)', 'Interfaces (HL7 / EMR)'), ec_list.options[1]);
            ec_list.add(new Option('I/O Splitter', 'I/O Splitter'), ec_list.options[1]);
            ec_list.add(new Option('Gate Control', 'Gate Control'), ec_list.options[1]);
            ec_list.add(new Option('Firewall', 'Firewall'), ec_list.options[1]);
            ec_list.add(new Option('EMR', 'EMR'), ec_list.options[1]);
            ec_list.add(new Option('Domain / LDAP / SSO', 'Domain / LDAP / SSO'), ec_list.options[1]);
            ec_list.add(new Option('DICOM', 'DICOM'), ec_list.options[1]);
            ec_list.add(new Option('Connection to FORUM', 'Connection to FORUM'), ec_list.options[1]);
            ec_list.add(new Option('Bluetooth Gateway', 'Bluetooth Gateway'), ec_list.options[1]);
            ec_list.add(new Option('Bluetooth', 'Bluetooth'), ec_list.options[1]);
            ec_list.add(new Option('Anti-Virus', 'Anti-Virus'), ec_list.options[1]);
            break;
        case "Optics / Light":
            enableAndReset(ec_list, 1);
            ec_list.add(new Option('Scanner', 'Scanner'), ec_list.options[1]);
            ec_list.add(new Option('Protection Glass', 'Protection Glass'), ec_list.options[1]);
            ec_list.add(new Option('Prism (Group)', 'Prism (Group)'), ec_list.options[1]);
            ec_list.add(new Option('Mirror', 'Mirror'), ec_list.options[1]);
            ec_list.add(new Option('Lens / Lens System', 'Lens / Lens System'), ec_list.options[1]);
            ec_list.add(new Option('Laser Resonator', 'Laser Resonator'), ec_list.options[1]);
            ec_list.add(new Option('Interferometer / Spectrometer', 'Interferometer / Spectrometer'), ec_list.options[1]);
            ec_list.add(new Option('Interface', 'Interface'), ec_list.options[1]);
            ec_list.add(new Option('Illumination Source LED / SLD', 'Illumination Source LED / SLD'), ec_list.options[1]);
            ec_list.add(new Option('Illunination Source Bulb Xenon', 'Illunination Source Bulb Xenon'), ec_list.options[1]);
            ec_list.add(new Option('Illumination Source Bulb Halogen', 'Illumination Source Bulb Halogen'), ec_list.options[1]);
            ec_list.add(new Option('Flourescence Unit', 'Flourescence Unit'), ec_list.options[1]);
            ec_list.add(new Option('Filter', 'Filter'), ec_list.options[1]);
            ec_list.add(new Option('Fiber Optic Cable / Light Guide', 'Fiber Optic Cable / Light Guide'), ec_list.options[1]);
            ec_list.add(new Option('Eyepiece', 'Eyepiece'), ec_list.options[1]);
            ec_list.add(new Option('Beam Splitter', 'Beam Splitter'), ec_list.options[1]);
            ec_list.add(new Option('Beam Shaper / Homogenizer', 'Beam Shaper / Homogenizer'), ec_list.options[1]);
            ec_list.add(new Option('Acousto-Optic Modulator (AOM)', 'Acousto-Optic Modulator (AOM)'), ec_list.options[1]);
            break;
        case 'Pneumatics':
            enableAndReset(ec_list, 1);
            ec_list.add(new Option('Valve', 'Valve'), ec_list.options[1]);
            ec_list.add(new Option('Pump', 'Pump'), ec_list.options[1]);
            ec_list.add(new Option('Pressure Regulator', 'Pressure Regulator'), ec_list.options[1]);
            ec_list.add(new Option('Hose Connection / Sealing', 'Hose Connection / Sealing'), ec_list.options[1]);
            ec_list.add(new Option('Compressor', 'Compressor'), ec_list.options[1]);
            break;
        case 'Radiation':
            enableAndReset(ec_list, 1);
            ec_list.add(new Option('XRS', 'XRS'), ec_list.options[1]);
            ec_list.add(new Option('Water Phantom', 'Water Phantom'), ec_list.options[1]);
            ec_list.add(new Option('Unidos', 'Unidos'), ec_list.options[1]);
            ec_list.add(new Option('Sterilization Container', 'Sterilization Container'), ec_list.options[1]);
            ec_list.add(new Option('PDA', 'PDA'), ec_list.options[1]);
            ec_list.add(new Option('PAICH / PDA Cable', 'PAICH / PDA Cable'), ec_list.options[1]);
            ec_list.add(new Option('PAICH', 'PAICH'), ec_list.options[1]);
            ec_list.add(new Option('Ion Chamber', 'Ion Chamber'), ec_list.options[1]);
            ec_list.add(new Option('Intrabeam Accessories', 'Intrabeam Accessories'), ec_list.options[1]);
            ec_list.add(new Option('Equipment Inventory', 'Equipment Inventory'), ec_list.options[1]);
            ec_list.add(new Option('ERM / Test Adaptor', 'ERM / Test Adaptor'), ec_list.options[1]);
            ec_list.add(new Option('Control Console', 'Control Console'), ec_list.options[1]);
            ec_list.add(new Option('Applicator', 'Applicator'), ec_list.options[1]);
            break;
        case 'Service':
            enableAndReset(ec_list, 1);
            ec_list.add(new Option('Training', 'Training'), ec_list.options[1]);
            ec_list.add(new Option('Tools', 'Tools'), ec_list.options[1]);
            ec_list.add(new Option('Test Eye', 'Test Eye'), ec_list.options[1]);
            ec_list.add(new Option('Spare Part Identification', 'Spare Part Identification'), ec_list.options[1]);
            ec_list.add(new Option('Service Password / FSE Key', 'Service Password / FSE Key'), ec_list.options[1]);
            ec_list.add(new Option('Service Other', 'Service Other'), ec_list.options[1]);
            ec_list.add(new Option('Service Error', 'Service Error'), ec_list.options[1]);
            ec_list.add(new Option('SIS / Service Documentation', 'SIS / Service Documentation'), ec_list.options[1]);
            ec_list.add(new Option('Protocol', 'Protocol'), ec_list.options[1]);
            ec_list.add(new Option('Professional Services / Software Tool', 'Professional Services / Software Tool'), ec_list.options[1]);
            ec_list.add(new Option('Packaging / Transport Box', 'Packaging / Transport Box'), ec_list.options[1]);
            ec_list.add(new Option('Non-Defined Spare Part', 'Non-Defined Spare Part'), ec_list.options[1]);
            ec_list.add(new Option('Logistics / Availability / Discrepancy', 'Logistics / Availability / Discrepancy'), ec_list.options[1]);
            ec_list.add(new Option('Contract / Installation / Preventative Maintenance', 'Contract / Installation / Preventative Maintenance'), ec_list.options[1]);
            break;
        case 'Software General':
            enableAndReset(ec_list, 1);
            ec_list.add(new Option('Webserver', 'Webserver'), ec_list.options[1]);
            ec_list.add(new Option('Video Recording', 'Video Recording'), ec_list.options[1]);
            ec_list.add(new Option('Update / Upgrade Package', 'Update / Upgrade Package'), ec_list.options[1]);
            ec_list.add(new Option('Radiance', 'Radiance'), ec_list.options[1]);
            ec_list.add(new Option('Pop-Up Blocker', 'Pop-Up Blocker'), ec_list.options[1]);
            ec_list.add(new Option('Plugin', 'Plugin'), ec_list.options[1]);
            ec_list.add(new Option('Platform Service (Intra / Soft / Stor)', 'Platform Service (Intra / Soft / Stor)'), ec_list.options[1]);
            ec_list.add(new Option('Operating System', 'Operating System'), ec_list.options[1]);
            ec_list.add(new Option('Mobile App', 'Mobile App'), ec_list.options[1]);
            ec_list.add(new Option('Middleware / API', 'Middleware / API'), ec_list.options[1]);
            ec_list.add(new Option('License', 'License'), ec_list.options[1]);
            ec_list.add(new Option('Firmware / Driver', 'Firmware / Driver'), ec_list.options[1]);
            ec_list.add(new Option('Database', 'Database'), ec_list.options[1]);
            ec_list.add(new Option('Data (Calibration, Config, User Profile)', 'Data (Calibration, Config, User Profile)'), ec_list.options[1]);
            ec_list.add(new Option('Archive / Retrieve', 'Archive / Retrieve'), ec_list.options[1]);
            ec_list.add(new Option('Application Software / Graphical UI', 'Application Software / Graphical UI'), ec_list.options[1]);
            break;
        case 'Software Products':
            enableAndReset(ec_list, 1);
            ec_list.add(new Option('OCT Function', 'OCT Function'), ec_list.options[1]);
            ec_list.add(new Option('Markerless Match', 'Markerless Match'), ec_list.options[1]);
            ec_list.add(new Option('Markerbased Match', 'Markerbased Match'), ec_list.options[1]);
            ec_list.add(new Option('FORUM Viewer', 'FORUM Viewer'), ec_list.options[1]);
            ec_list.add(new Option('FORUM Server', 'FORUM Server'), ec_list.options[1]);
            ec_list.add(new Option('Eye Tracking System', 'Eye Tracking System'), ec_list.options[1]);
            ec_list.add(new Option('Data Injection Overlay', 'Data Injection Overlay'), ec_list.options[1]);
            ec_list.add(new Option('Caching', 'Caching'), ec_list.options[1]);
            ec_list.add(new Option('Assistant Function', 'Assistant Function'), ec_list.options[1]);
            ec_list.add(new Option('AssistMatch', 'AssistMatch'), ec_list.options[1]);
            ec_list.add(new Option('Analysis-Engine', 'Analysis-Engine'), ec_list.options[1]);
            ec_list.add(new Option('3rd Party Software', '3rd Party Software'), ec_list.options[1]);
            break;
        case "Video / Photo":
            enableAndReset(ec_list, 1);
            ec_list.add(new Option('System Cable', 'System Cable'), ec_list.options[1]);
            ec_list.add(new Option('Signal Chain', 'Signal Chain'), ec_list.options[1]);
            ec_list.add(new Option('Recording (Unit / Board)', 'Recording (Unit / Board)'), ec_list.options[1]);
            ec_list.add(new Option('Reclocker', 'Reclocker'), ec_list.options[1]);
            ec_list.add(new Option('Multiplexor / Output Board', 'Multiplexor / Output Board'), ec_list.options[1]);
            ec_list.add(new Option('External Video System (Split / Repeat)', 'External Video System (Split / Repeat)'), ec_list.options[1]);
            ec_list.add(new Option('External Cabling', 'External Cabling'), ec_list.options[1]);
            ec_list.add(new Option('External Adaptation', 'External Adaptation'), ec_list.options[1]);
            ec_list.add(new Option('Control / Main Board / Unit', 'Control / Main Board / Unit'), ec_list.options[1]);
            ec_list.add(new Option('Camera Control Unit (CCU)', 'Camera Control Unit (CCU)'), ec_list.options[1]);
            ec_list.add(new Option('Camera', 'Camera'), ec_list.options[1]);
            ec_list.add(new Option('3D Image', '3D Image'), ec_list.options[1]);
            break;
        default:
            ec_list.setAttribute('disabled', true);
            break;
    }
}

// Populate request-source based on request-origin
function handleRequestOrigin() {
    req_source_list = document.getElementById('request-source');
    debugmsg(4, 'this.options[this.selectedIndex].value: ' + this.options[this.selectedIndex].value);
    let fu_op = new Option('Follow-Up Call', 'Follow-Up Call');
    let oc_op = new Option('Outgoing Call', 'Outgoing Call');
    let q_op = new Option('Queue', 'Queue');
    let vm_op = new Option('Voicemail', 'Voicemail');
    let efu_op = new Option('Follow-Up Email', 'Follow-Up Email');
    let srf_op = new Option('Service Request Form', 'Service Request Form');
    let ti_op = new Option('Team Inbox', 'Team Inbox');
    switch (this.options[this.selectedIndex].value) {
        case 'Call':
            enableAndReset(req_source_list, 2);
            req_source_list.add(vm_op, req_source_list.options[1]);
            req_source_list.add(q_op, req_source_list.options[1]);
            req_source_list.add(oc_op, req_source_list.options[1]);
            req_source_list.add(fu_op, req_source_list.options[1]);
            break;
        case 'Email':
            enableAndReset(req_source_list, 2);
            req_source_list.add(ti_op, req_source_list.options[1]);
            req_source_list.add(srf_op, req_source_list.options[1]);
            req_source_list.add(efu_op, req_source_list.options[1]);
            break;
        default:
            break;
    }
}

// Keep eos-instrument-model synced to main instrument-model select
function syncEosModelToInstrumentField() {
    eos_instrument_field = document.getElementById('eos-instrument-type');
    debugmsg(4, 'this.options[this.selectedIndex].value: ' + this.options[this.selectedIndex].value);
    /*
        NOTE: The options here are cited by index; there may be a better way to reference the elements,
        particularly since the organization and breakdown of the select field is subject to change over time.
        In any case, if this is ever not working as expected, check the index values carefully.
    */
    switch (this.options[this.selectedIndex].value) {
        case 'Atlas 500':
        case 'Atlas 9000':
            handleEosModel('atlas');
            eos_instrument_field.getElementsByTagName('option')[2].selected = 'selected';
            break;
        case 'Cirrus OCT':
            eos_instrument_field.getElementsByTagName('option')[3].selected = 'selected';
            handleEosModel('cirrus-oct');
            break;
        case 'Cirrus Photo':
            eos_instrument_field.getElementsByTagName('option')[4].selected = 'selected';
            handleEosModel('cirrus-photo');
            break;
        case 'Clarus':
            eos_instrument_field.getElementsByTagName('option')[6].selected = 'selected';
            handleEosModel('clarus');
            break;
        case 'HFA3':
            eos_instrument_field.getElementsByTagName('option')[8].selected = 'selected';
            handleEosModel('hfa');
            break;
        case 'IOLMaster':
            eos_instrument_field.getElementsByTagName('option')[9].selected = 'selected';
            handleEosModel('iolmaster');
            break;
        case 'Stratus 3000/Visante 1000 (old)':
            handleEosModel('stratus');
            eos_instrument_field.getElementsByTagName('option')[13].selected = 'selected';
            break;
        case 'Visucam 224/524':
        case 'Visucam Pro/NM/NMFA':
            handleEosModel('visucam');
            eos_instrument_field.getElementsByTagName('option')[15].selected = 'selected';
            break;
        default:
            break;
    }
}

// Populate eos-instrument-model based on eos-instrument-type
function handleEosModel(manual_switch) {
    eos_model_list = document.getElementById('eos-instrument-model');
    var eval_index = '';
    debugmsg(4, 'manual_switch: ' + manual_switch);
    if (typeof manual_switch !== 'object') {
        eval_index = manual_switch;
    } else {
        debugmsg(4, 'this.options[this.selectedIndex].value: ' + this.options[this.selectedIndex].value);
        eval_index = this.options[this.selectedIndex].value;
    }
    debugmsg(4, 'eval_index: ' + eval_index);
    switch (eval_index) {
        case 'acuitus':
            enableAndReset(eos_model_list, 1);
            eos_model_list.add(new Option('Acuitus 5015', '5015'), eos_model_list.options[1]);
            eos_model_list.add(new Option('Acuitus 5010', '5010'), eos_model_list.options[1]);
            eos_model_list.add(new Option('Acuitus 5000', '5000'), eos_model_list.options[1]);
            break;
        case 'atlas':
            enableAndReset(eos_model_list, 1);
            eos_model_list.add(new Option('ATLAS 995', '995'), eos_model_list.options[1]);
            eos_model_list.add(new Option('ATLAS 993', '993'), eos_model_list.options[1]);
            eos_model_list.add(new Option('ATLAS 992', '992'), eos_model_list.options[1]);
            eos_model_list.add(new Option('ATLAS 991', '991'), eos_model_list.options[1]);
            break;
        case 'cirrus-oct':
            enableAndReset(eos_model_list, 1);
            eos_model_list.add(new Option('Cirrus HD-OCT 4000', '4000'), eos_model_list.options[1]);
            eos_model_list.add(new Option('Cirrus HD-OCT 400', '400'), eos_model_list.options[1]);
            break;
        case 'cirrus-photo':
            enableAndReset(eos_model_list, 1);
            eos_model_list.add(new Option('Cirrus Photo 800', '800'), eos_model_list.options[1]);
            eos_model_list.add(new Option('Cirrus Photo 600', '600'), eos_model_list.options[1]);
            break;
        case 'ct':
            enableAndReset(eos_model_list, 1);
            eos_model_list.add(new Option('CT 992', '992'), eos_model_list.options[1]);
            eos_model_list.add(new Option('CT 991', '991'), eos_model_list.options[1]);
            eos_model_list.add(new Option('CT 990', '990'), eos_model_list.options[1]);
            eos_model_list.add(new Option('CT 920', '920'), eos_model_list.options[1]);
            eos_model_list.add(new Option('CT 910', '910'), eos_model_list.options[1]);
            break;
        case 'fundus-camera':
            enableAndReset(eos_model_list, 1);
            eos_model_list.add(new Option('RC 310', 'RC 310'), eos_model_list.options[1]);
            eos_model_list.add(new Option('FK 30', 'FK 30'), eos_model_list.options[1]);
            eos_model_list.add(new Option('FF 450plus IR', 'FF 450plus IR'), eos_model_list.options[1]);
            eos_model_list.add(new Option('FF 450 IR', 'FF 450 IR'), eos_model_list.options[1]);
            eos_model_list.add(new Option('FF 450plus', 'FF 450plus'), eos_model_list.options[1]);
            eos_model_list.add(new Option('FF 450 IRu', 'FF 450 IRu'), eos_model_list.options[1]);
            eos_model_list.add(new Option('FF 450plus IRu', 'FF 450plus IRu'), eos_model_list.options[1]);
            eos_model_list.add(new Option('FF 450', 'FF 450'), eos_model_list.options[1]);
            eos_model_list.add(new Option('FF 5', 'FF 5'), eos_model_list.options[1]);
            eos_model_list.add(new Option('FF 4', 'FF 4'), eos_model_list.options[1]);
            break;
        case 'hfa':
            enableAndReset(eos_model_list, 1);
            eos_model_list.add(new Option('HFA II 750', '750'), eos_model_list.options[1]);
            eos_model_list.add(new Option('HFA II 745', '745'), eos_model_list.options[1]);
            eos_model_list.add(new Option('HFA II 740', '740'), eos_model_list.options[1]);
            eos_model_list.add(new Option('HFA II 735', '735'), eos_model_list.options[1]);
            eos_model_list.add(new Option('HFA II 730', '730'), eos_model_list.options[1]);
            eos_model_list.add(new Option('HFA 750i', '750'), eos_model_list.options[1]);
            break;
        case 'iolmaster':
            enableAndReset(eos_model_list, 1);
            eos_model_list.add(new Option('IOLMaster 5', '5'), eos_model_list.options[1]);
            eos_model_list.add(new Option('IOLMaster 4', '4'), eos_model_list.options[1]);
            eos_model_list.add(new Option('IOLMaster 3', '3'), eos_model_list.options[1]);
            eos_model_list.add(new Option('IOLMaster 2', '2'), eos_model_list.options[1]);
            eos_model_list.add(new Option('IOLMaster 1', '1'), eos_model_list.options[1]);
            break;
        case 'matrix':
            enableAndReset(eos_model_list, 1);
            eos_model_list.add(new Option('Matrix 715', '715'), eos_model_list.options[1]);
            break;
        case 'oct':
            enableAndReset(eos_model_list, 1);
            eos_model_list.add(new Option('OCT 2', '2'), eos_model_list.options[1]);
            eos_model_list.add(new Option('OCT 1', '1'), eos_model_list.options[1]);
            break;
        case 'slit-lamp':
            enableAndReset(eos_model_list, 1);
            eos_model_list.add(new Option('10 SL', '10'), eos_model_list.options[1]);
            eos_model_list.add(new Option('10 SL/O', '10-O'), eos_model_list.options[1]);
            eos_model_list.add(new Option('20 SL', '20'), eos_model_list.options[1]);
            eos_model_list.add(new Option('30 SL/M', '30'), eos_model_list.options[1]);
            eos_model_list.add(new Option('40 SL/P', '40'), eos_model_list.options[1]);
            eos_model_list.add(new Option('SL 100/16', '100'), eos_model_list.options[1]);
            eos_model_list.add(new Option('SL 105', '105'), eos_model_list.options[1]);
            eos_model_list.add(new Option('Photo-SL', 'Photo'), eos_model_list.options[1]);
            break;
        case 'stratus':
            enableAndReset(eos_model_list, 1);
            eos_model_list.add(new Option('Stratus P4', 'P4'), eos_model_list.options[1]);
            eos_model_list.add(new Option('Stratus P3', 'P3'), eos_model_list.options[1]);
            break;
        case 'visante':
            enableAndReset(eos_model_list, 1);
            eos_model_list.add(new Option('Visante OCT 1000', '1000'), eos_model_list.options[1]);
            break;
        case 'visucam':
            enableAndReset(eos_model_list, 1);
            eos_model_list.add(new Option('VISUCAM PRO NM 1', 'PRO NM 1'), eos_model_list.options[1]);
            eos_model_list.add(new Option('VISUCAM PRO NM 2', 'PRO NM 2'), eos_model_list.options[1]);
            eos_model_list.add(new Option('VISUCAM NM/FA1', 'NM/FA1'), eos_model_list.options[1]);
            eos_model_list.add(new Option('VISUCAM Lite', 'Lite'), eos_model_list.options[1]);
            break;
        case 'visupac':
            enableAndReset(eos_model_list, 1);
            eos_model_list.add(new Option('VISUPAC 481', '481'), eos_model_list.options[1]);
            eos_model_list.add(new Option('VISUPAC 471', '471'), eos_model_list.options[1]);
            eos_model_list.add(new Option('VISUPAC 450', '450'), eos_model_list.options[1]);
            eos_model_list.add(new Option('VISUPAC 430', '430'), eos_model_list.options[1]);
            break;
        default:
            eos_model_list.setAttribute('disabled', true);
            break;
    }
}

document.getElementById('request-came-from').addEventListener('change', handleRequestOrigin);
document.getElementById('error-group').addEventListener('change', handleErrorGroup);
if (sandbox) {
    document.getElementById('instrument-model').addEventListener('change', syncEosModelToInstrumentField);
    document.getElementById('eos-instrument-type').addEventListener('change', handleEosModel);
}