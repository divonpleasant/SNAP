// Filled form fields backgrounds
/*
Browser support:
    Chrome - Webkit's autofill background changer is only manipulable by hacks
             which have not been implemented here. This is mostly noticeable
             when using dark mode, although the background colors differ
             somewhat even in default (light) mode from the offical color
             configured below.
*/
$('input, textarea, select').on('focus keyup input change keydown paste', function () {
    this.style.backgroundColor = (so.Settings.ui.dark_mode.value) ? '#244a86' : '#e6f2ff';
});

$('input, textarea, select').on('blur', function () {
    if (this.value === '') {
        this.style.backgroundColor = '';
    }
});

//----- FUNCTIONS -----//
// Generic function to enable target select field and clear previously generated options
function enableAndReset(targetElement, defaultOptionsLength) {
    targetElement.removeAttribute('disabled');
    while (targetElement.options.length > defaultOptionsLength) {
        targetElement.remove(1);
    }
}

// Populate error-code based on error-group selection
function handleErrorGroup() {
    console.debug('Executing handleErrorGroup ...');
    var ec_list = document.getElementById('error-code');
    var group_index = this.options[this.selectedIndex].value;
    console.debug({group_index});
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
    console.debug('Executing handleRequestOrigin ...');
    req_source_list = document.getElementById('request-source');
    console.debug('this.options[this.selectedIndex].value: ' + this.options[this.selectedIndex].value);
    switch (this.options[this.selectedIndex].value) {
        case 'Call':
            enableAndReset(req_source_list, 2);
            req_source_list.add(new Option('Voicemail', 'Voicemail'), req_source_list.options[1]);
            req_source_list.add(new Option('Queue', 'Queue'), req_source_list.options[1]);
            req_source_list.add(new Option('Outgoing Call', 'Outgoing Call'), req_source_list.options[1]);
            req_source_list.add(new Option('Follow-Up Call', 'Follow-Up Call'), req_source_list.options[1]);
            req_source_list.add(new Option('Callback Queue', 'Callback Queue'), req_source_list.options[1]);
            break;
        case 'Email':
            enableAndReset(req_source_list, 2);
            req_source_list.add(new Option('Team Inbox', 'Team Inbox'), req_source_list.options[1]);
            req_source_list.add(new Option('Service Request Form', 'Service Request Form'), req_source_list.options[1]);
            req_source_list.add(new Option('Follow-Up Email', 'Follow-Up Email'), req_source_list.options[1]);
            break;
        default:
            break;
    }
}

document.getElementById('request-came-from').addEventListener('change', handleRequestOrigin);
document.getElementById('error-group').addEventListener('change', handleErrorGroup);

function activateProcess() {
    console.debug('Executing activateProcess ...');
    // Prevent the default action (which is following the link)
    event.preventDefault();
    proc_template_id = event.srcElement.id.substr(15,);
    console.debug({proc_template_id});
    var proc_context = new Array;
    var proc_location = findProcessText(proc_template_id);
    console.debug({proc_location});
    const pt = new generateTemplates(proc_context);
    var proc_text = pt.templates.process[proc_template_id].general[proc_location];
    document.getElementById('prompt-text').innerHTML = proc_text;
    document.getElementById('prompt').style.display = 'flex';
    document.getElementById('prompt-tail').style.display = 'none';
}
function manualActivateProcess(proc_type, proc_section, proc_location) {
    console.debug("Executing manualActivateProcess ...\n  proc_type: " + proc_type + "\n  proc_section: " + proc_section + "\n  proc_location: " + proc_location);
    var proc_context = new Array;
    const pt = new generateTemplates(proc_context);
    var proc_text = pt.templates.process[proc_type][proc_section][proc_location];
    document.getElementById('prompt-text').innerHTML = proc_text;
    document.getElementById('prompt').style.display = 'flex';
    document.getElementById('prompt-tail').style.display = 'none';
}

function displayProcessMessage(msg_txt) {
    console.debug("Executing displayProcessMessage ...\n  msg_txt: " + msg_txt);
    document.getElementById('prompt-text').innerHTML = msg_txt;
    document.getElementById('prompt-content').classList.add('system-message');
    document.getElementById('prompt').style.display = 'flex';
    document.getElementById('prompt-tail').style.display = 'none';
    
}

function pmToggle(state = false) {
    console.debug("Executing pmToggle ...\n  state: " + state);
    document.getElementById('is-pm').checked = state; 
    
    var auto_fields = ['frequency-problem', 'logs-not-attached-reason', 'screenshots-attached-reason'];
    if (state) {
        document.getElementById('same-as-reported').checked = true;
        document.getElementById('frequency-selector').selectedIndex = 5;
        for (let aa = 0; aa < auto_fields.length; aa++) {
            document.getElementById(auto_fields[aa]).value = 'PM Request';
        }
    } else {
        for (let aa = 0; aa < auto_fields.length; aa++) {
            (document.getElementById(auto_fields[aa]).value === 'PM Request') ? document.getElementById(auto_fields[aa]).value = '' : '';
        }
    }
}

function updateDescription () {
    console.debug('Executing updateDescription ...');
    var proc_id = document.getElementById('common-call-scenarios').options[document.getElementById('common-call-scenarios').selectedIndex].value;
    var proc_data = proc_id.split('_', 2);
    var proc_section = proc_data[0];
    var proc_location = proc_data[1];
    console.debug({proc_id});
    console.debug({proc_data});
    console.debug({proc_section});
    console.debug({proc_location});
    (document.getElementById('prompt').style.display === 'flex') ? manualActivateProcess('call-scenarios', proc_section, proc_location) : '';
    var existing_description = document.getElementById('description').value.split('. ');
    (existing_description.length <= 1) ? document.getElementById('description').innerHTML = '' : '';
    console.debug({existing_description});
    var descr_txt = '';
    pmToggle();
    switch (proc_location) {
        case 'canadian-customer':
            descr_txt = 'Assisted Canadian Customer.';
            break;
        case 'delivery-doa':
            descr_txt = 'Delivery DOA.';
            break;
        case 'fse-follow-up':
            descr_txt = 'FSE Follow-Up.';
            break;
        case 'pm-request':
        case 'proaim-pm-request':
            descr_txt = 'PM Request.';
            pmToggle(true);
            break;
        case 'recertification':
            descr_txt = 'Recertification.';
            break;
        case 'review-station-software-install':
            descr_txt = 'RS Software Install.';
            break;
        case 'spare-parts':
            descr_txt = 'Spare Parts Request.';
            break;
        default:
            descr_txt = '';
            break;
    }
    document.getElementById('description').insertAdjacentHTML('afterbegin', descr_txt);
    document.getElementById('problem-description').value = document.getElementById('description').value;
}
function findProcessText(proc_type, template_label = 'default') {
    console.debug("Executing findProcessText ...\n  proc_type: " + proc_type + "\n  template_label: " + template_label);
    var template_el = '';
    switch (proc_type) {
        case 'call-scenarios':
            template_el = document.getElementById('common-call-scenarios');
            console.debug('template_el.selectedIndex: ' + template_el.selectedIndex);
            template_label = template_el.options[template_el.selectedIndex].value;
            break;
        case 'call-types':
            template_el = document.getElementById('call-type');
            console.debug('template_el.selectedIndex: ' + template_el.selectedIndex);
            template_label = template_el.options[template_el.selectedIndex].value;
            break;
        default:
            break;
    }
    console.debug({template_label});
    if (template_label.includes('_')) {
        console.log('Determining unsectioned template label');
        var label_data = template_label.split('_', 2);
        var label_section = label_data[0];
        var label_label = label_data[1];
        console.log({label_data});
        console.log({label_section});
        console.log({label_label});
        return label_label;
    } else {
        return (template_label === '') ? 'default' : template_label;
    }
}

function activateScript () {
    // Prevent the default action (which is following the link)
    event.preventDefault();
    // Retrieve element id and strip prefix (script-prompt-)
    var scr_template_id = event.srcElement.id.substr(14,);
    console.log({scr_template_id});
    var script_context = new Array;
    var script_location = findScriptText(scr_template_id);
    const st = new generateTemplates(script_context);
    //document.getElementById('prompt-text').innerHTML = st.templates.script.greeting.default['callback_text'];
    var script_txt = st.templates.script[scr_template_id][script_location[0]][script_location[1]];
    if (typeof script_txt === 'undefined') {
        script_txt = st.templates.script[scr_template_id].default[script_location[1]];
    }
    document.getElementById('prompt-text').innerHTML = script_txt;
    //console.log(st.templates.script.greeting.default);
    document.getElementById('prompt').style.display = 'flex';
    document.getElementById('prompt-tail').style.display = 'inline';
}
function findScriptText(script_type) {
    console.debug("Executing findScriptText ...\n  script_type: " + script_type);
    //var subsection = (use_custom_scripts) ? 'user' : 'default';
    var subsection = (so.Settings.user.use_custom_scripts.value) ? 'user' : 'default';
    var template_label = '';
    switch (script_type) {
        case 'greeting':
            var call_source = document.getElementById('request-source').value
            switch (call_source) {
                case 'Voicemail':
                    template_label = 'voicemail';
                    break;
                case 'Queue':
                    template_label = 'queue';
                    break;
                case 'Outgoing Call':
                    template_label = 'outgoing';
                    break;
                case 'Follow-Up Call':
                    template_label = 'outgoing';
                    break;
                case 'Callback Queue':
                    template_label = 'callback';
                    break;
                default:
                    template_label = 'queue';
                    break;
            }
            break;
        case 'wrap-up':
            template_label = 'standard';
            break;
        default:
            break;
    }
    console.debug('subsection: ' + subsection + "\ntemplate_label: " + template_label);
    var locations = [subsection, template_label];
    return locations;
}
function closeScript() {
    console.debug('Executing closeScript ...');
    event.preventDefault();
    document.getElementById('prompt-content').classList.remove('system-message');
    document.getElementById('prompt').style.display = 'none';
}

function callTypeEval() {
    console.debug('Executing callTypeEval ...');
    crossChargeAutoUpdate();
    document.querySelectorAll('.fss-details').forEach(a=>a.style.display = 'none');
    switch (document.getElementById('call-type')[document.getElementById('call-type').selectedIndex].value) {
        case 'remote-service':
            if (document.getElementById('error-group').selectedIndex === 0 || document.getElementById('error-code').selectedIndex === 0 || document.getElementById('action-code').selectedIndex === 0) {
                updateSystemBox('Make sure to set Error Group, Error Code, and Action Code when setting Call Type to Remote Service.');
            }
            break;
        case 'onsite-fix':
            document.querySelectorAll('.fss-details').forEach(a=>a.style.display = 'block');
            updateSystemBox('Please select the appropriate FSS');
            break;
        default:
            break;
    }
}

function crossChargeAutoUpdate() {
    console.debug('Executing crossChargeAutoUpdate ...');
    if (document.getElementById('billing-type').value === 'B' && document.getElementById('remote-resolution').checked && document.getElementById('call-type').value === 'remote-service') {
        console.log('crossChargeAutoUpdate ... Updating Billing Type to XC for Remote Fix (Remote Service call type and Remote resolution? checked)');
        document.getElementById('billing-type').value = 'XC';
        // Update to use templates.system.alerts.remote-service-billing-type once alerting function is implemented
        (so.Settings.alerts.xc.value) ? updateSystemBox('Remote Service/Remote Resolution for Billable customers should use Billing Type XC') : '';
    } else if (document.getElementById('billing-type').value === 'XC' && (!document.getElementById('remote-resolution').checked || document.getElementById('call-type').value !== 'remote-service')) {
        console.log('crossChargeAutoUpdate ... Changing XC to B because call type or remote resolution checkbox do not meet the XC criteria');
        document.getElementById('billing-type').value = 'B';
    }
    logHistoryEvent('Billing Type Auto-Updated: ' + document.getElementById('billing-type').value)
}

function hideSystemBox() {
    event.preventDefault();
    console.debug('Executing hideSystemBox...');
    document.getElementById('systembox').classList.remove('showbox');
    return true;
}

function toggleSystemBox() {
    event.preventDefault();
    document.getElementById('systembox').classList.toggle('showbox');
    return true;
}

function updateSystemBox(msg = '...') {
    document.getElementById('systembox-contents').innerHTML = msg;
    document.getElementById('systembox').classList.add('showbox');
    return true;
}

function addressChangeHandleOtherReason() {
    if (document.getElementById('address-change-reason-list')[document.getElementById('address-change-reason-list').selectedIndex].value === 'other') {
        document.getElementById('address-change-reason').style.display = 'flex';
    } else {
        document.getElementById('address-change-reason').style.display = 'none';
    }
}

function handleBillingAddressChange() {
    (document.getElementById('billing-change').checked) ? document.getElementById('billing-address-change').classList.replace('overlay-toggle-off', 'overlay-toggle-on') : document.getElementById('billing-address-change').classList.replace('overlay-toggle-on', 'overlay-toggle-off');
}

function handleAddressChange() {
    console.debug('Executing handleAddressChange ...');
    manualCloseOverlay('address-change');
    if (!document.getElementById('site-change').checked && !document.getElementById('billing-change').checked) {
        var requirement_msg = 'You must specify at least one address type (instrument/shipping or billing) to update'
        updateSystemBox(requirement_msg);
        console.warn('handleAddressChange WARN: ' + requirement_msg);
        return false;
    }
    var change_task_type_line = '';
    var subject_account_name = (document.getElementById('account').value !== '') ? ' for ' + document.getElementById('account').value : '';
    var site_string = `New Site Address:
    ${document.getElementById('new-site-address').value}
    Location Phone: ${document.getElementById('new-site-address-phone').value}
Previous Site Address:
    ${document.getElementById('current-site-address').value}`;
    var billing_string = `New Billing Address:
    ${document.getElementById('new-billing-address').value}
Previous Billing Address:
    ${document.getElementById('current-billing-address').value}`;
    var serial_string = ' (' + document.getElementById('model')[document.getElementById('model').selectedIndex].value + ' S/N ' + document.getElementById('serial').value + ')';
    var incl_serial = '';
    var final_site = '';
    var final_bill = '';
    if (document.getElementById('site-change').checked && !document.getElementById('billing-change').checked) {
        change_task_type_line = 'Instrument/Shipping';
        incl_serial = serial_string;
        final_site = site_string;
    } else if (!document.getElementById('site-change').checked && document.getElementById('billing-change').checked) {
        change_task_type_line = 'Billing';
        final_bill = billing_string;
    } else if (document.getElementById('site-change').checked && document.getElementById('billing-change').checked) {
        change_task_type_line = 'Shipping & Billing';
        incl_serial = serial_string;
        final_site = site_string;
        final_bill = billing_string;
    }
    var change_reason = '';
    switch (document.getElementById('address-change-reason-list')[document.getElementById('address-change-reason-list').selectedIndex].value) {
        case 'acquisition':
            change_reason = 'Acquisition/New Parent Company';
            break;
        case 'instrument-move':
            change_reason = 'Instrument Moved';
            break;
        case 'instrument-sold':
            change_reason = 'Instrument Sold/Owner Change';
            break;
        case 'new-satellite':
            change_reason = 'New Satellite Office';
            break;
        case 'relocation':
            change_reason = 'Practice Relocation';
            break;
        case 'other':
            if (document.getElementById('address-change-reason').value === '') {
                console.warn('Change reason cannot be undefined');
                return false;
            } else {
                change_reason = document.getElementById('address-change-reason').value;
            }
            break;
        case '':
        default:
            console.warn('Change reason cannot be undefined');
            return false;
    }
    var account_context = [change_task_type_line, incl_serial, subject_account_name, change_reason, final_site, final_bill];
    const act = new generateTemplates(account_context);
    console.debug(act.templates.process['instrument-address'].general['change-task']);
    var output = act.templates.process['instrument-address'].general['change-task'];
    clipBoarder(output, 'Address Change data');
    return output;
}

function checkPhoneFormat() {
    console.log('Executing checkPhoneFormat ...');
    var input_ph = document.getElementById('phone').value;
    var cleaned = ('' + input_ph).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})(\d+)?$/);
    console.log({match});
    if (match !== null) {
        console.log('match[5]: ' + match[5]);
        var ext = (typeof match[5] === 'undefined') ? '' : ' x' + match[5];
        document.getElementById('phone').value = [match[2], '-', match[3], '-', match[4], ext].join('');
    } else {
        console.warn('Could not update POC Phone Number formatting');
    }
}

function openReferenceBox(location_ref) {
    console.log("Executing openReferenceBox ... \nlocation_ref: " + location_ref);
    // EXAMPLE: $("#reference-contents").load("assets/data/reference/products/oct/overview.html");
    updateReferenceBoxContents(location_ref);
    document.getElementById('reference-box').style.display = 'grid';
}

function updateReferenceBoxContents(location_ref, direct_link = '') {
    console.log("Executing updateReferenceBoxContents ... \nlocation_ref: " + location_ref + "\ndirect_link: " + direct_link);
    // cache prevention
    var qparam = Date.now();
    var base_path = 'assets/data/reference/'
    var context_location = '';
    var path_location = '';
    switch (location_ref) {
        case 'instrument':
            context_location = 'products/' + document.getElementById('instrument')[document.getElementById('instrument').selectedIndex].id;
            path_location = (context_location === 'products/') ? 'default/index' : path_location + '/index';
            console.debug('context_location: ' + context_location);
            console.debug('path_location: ' + path_location);
            break;
        case 'direct':
            base_path = direct_link;
            context_location = '';
            path_location = '';
            break;
        default:
            break;
    }
    var final_path = base_path + context_location + path_location;
    console.debug('final_path: ' + final_path);
    var final_contents = final_path + '.html?q=' + qparam;
    var final_nav = final_path + '-NAV.html?q=' + qparam;
    console.debug('final_contents: ' + final_contents);
    console.debug('final_nav: ' + final_nav);
    $("#reference-contents").load(final_contents);
    $("#reference-nav").load(final_nav);
}

function closeReferenceBox() {
    document.getElementById('reference-box').style.display = 'none';
}

function populateTimeZone() {
    console.log('Executing populateTimeZone ...');
    var zip = calculateZipCode(true);
    var tz = (zip) ? mapZipCodeToTimeZone(zip) : false;
    console.debug({tz});
    document.getElementById('customer-time-zone').value = (tz[0]) ? tz[0] : '';
    document.getElementById('cust-tz').innerHTML = (tz[0]) ? 'Customer is ' + tz[1] + ' (' + tz[2] + '): ' + localizeOffset(tz[4]) : '';
}

function populateRegionAndContractRep() {
    console.log('Executing populateRegion ...');
    var region = attemptRegionDiscovery();
    console.debug({region});
    document.getElementById('customer-region').value = (region) ? region : '';
    const personnel = new generatePersonnelData();
    if (document.getElementById('customer-region').value !== '') {
        var reps = Object.keys(personnel.people.contract_rep);
        var match_reps = [];
        for (var r = 0; r < reps.length; r++) {
            console.debug('personnel.people.contract_rep[' + reps[r] + '].regions: ' + JSON.stringify(personnel.people.contract_rep[reps[r]].regions));
            if (personnel.people.contract_rep[reps[r]].regions.includes(document.getElementById('customer-region').value)) {
                match_reps.push(reps[r]);
            }
        }
    } else {
        console.warn('Region could not be established, so contract representatives could also not be determined. Please check Instrument Address field.');
    }
    console.debug({match_reps});
    for (var rcr = 0; rcr < match_reps.length; rcr++) {
        var support_group = personnel.people.contract_rep[match_reps[rcr]].group;
        var proc_field_id = 'customer-regional-' + support_group + '-rep';
        document.getElementById(proc_field_id).value = match_reps[rcr];
    }
}

function processInstrumentAddress() {
    console.debug('Executing processInstrumentAddress ...');
    populateTimeZone();
    populateRegionAndContractRep();
}

document.getElementById('common-call-scenarios').addEventListener('change', updateDescription);
document.getElementById('process-prompt-call-scenarios').addEventListener('click', activateProcess);
document.getElementById('process-prompt-call-types').addEventListener('click', activateProcess);
document.getElementById('process-prompt-clipboard-templates').addEventListener('click', activateProcess);
document.getElementById('script-prompt-greeting').addEventListener('click', activateScript);
document.getElementById('script-prompt-wrap-up').addEventListener('click', activateScript);
document.getElementById('prompt-close').addEventListener('click', closeScript);
document.getElementById('reference-close').addEventListener('click', closeReferenceBox);
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('description').addEventListener('input', function() {
        document.getElementById('problem-description').value = document.getElementById('description').value;
    });
    document.getElementById('svo').addEventListener('input', function() {
        document.getElementById('svo-ticket').value = document.getElementById('svo').value;
    });
});
document.getElementById('call-type').addEventListener('change', callTypeEval);
document.getElementById('remote-resolution').addEventListener('change', callTypeEval);
document.getElementById('hide-sys-box').addEventListener('click', hideSystemBox);
document.getElementById('notifications-toggle').addEventListener('click', toggleSystemBox);
document.getElementById('address-change-reason-list').addEventListener('change', addressChangeHandleOtherReason);
document.getElementById('billing-change').addEventListener('change', handleBillingAddressChange);
document.getElementById('instrument-address').addEventListener('input', function() {
    document.getElementById('current-site-address').value = document.getElementById('instrument-address').value;
});
var address_change_data = '';
document.getElementById('address-change-proceed').addEventListener('click', function() {
    var change_result = handleAddressChange();
    address_change_data = (change_result) ? change_result : '';
});
document.getElementById('phone').addEventListener('change', checkPhoneFormat);
document.getElementById('instrument-address').addEventListener('change', processInstrumentAddress);

/* Logging/History Listeners */
document.getElementById('serial').addEventListener('change', function() {
    logHistoryEvent('Serial number changed: ' + document.getElementById('serial').value);
});
document.getElementById('billing-type').addEventListener('change', function() {
    logHistoryEvent('Billing Type Set: ' + document.getElementById('billing-type').value);
});
