#! /bin/bash
# echo "["
# while IFS="," read -r stateName stateNumber pop1790
# do
#     echo "[\"$stateName\", \"$pop1790\", \"$stateNumber\"]"
# done < <(cut -d "," -f2,3,5 census-time-table.csv)
# echo "]"

# var index = 1
# while index <= 28
echo "["
for index in {5..32}
do
    echo "    ["

    first_line=true
    while IFS="," read -r stateName stateNumber population
    do
        if [ "$stateName" = "STATE" ]; then
            echo "        [\"NAME\", \"$population\", \"state\"],"
            continue
        fi
        if [ -z "$stateNumber" ]; then
            stateNumber="\"\""
        fi
        if [ -z "$population" ]; then
            population=""
        fi

        if [ "$first_line" = true ]; then
            first_line=false
        else
            echo ","
        fi
        echo -n "        [$stateName, \"$population\", $stateNumber]"
    done < <(cut -d "," -f2,3,$index census-time-table.csv)

    echo ""

    if [ $index -lt 32 ]; then
        echo "    ],"
    else
        echo "    ]"
    fi
done
echo "]"
