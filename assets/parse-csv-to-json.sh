#! /bin/bash

echo "{"
for index in {5..28}
do
    echo -n "  "

    first_line=true
    while IFS="," read -r stateName stateNumber population
    do
        if [ "$stateName" = "STATE" ]; then
            awk -F'A00AA' '{print "\"" $2 "\"\: ["}' <<< "$population"
            echo -n "    [\"NAME\", \"$population\", \"state\"]"
            continue
        fi
        if [ -z "$stateNumber" ]; then
            stateNumber="\"\""
        fi
        if [ -z "$population" ]; then
            population=""
        fi

        # if [ "$first_line" = true ]; then
        #     first_line=false
        # else
        #     echo ","
        # fi
        echo ","
        echo -n "    [$stateName, \"$population\", $stateNumber]"
    done < <(cut -d "," -f2,3,$index census-time-table.csv)

    echo ""

    if [ $index -lt 28 ]; then
        echo "  ],"
    else
        echo "  ]"
    fi
done
echo "}"
