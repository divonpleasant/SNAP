// Function to process parts list
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