#! /bin/bash
# echo "["
# while IFS="," read -r stateName stateNumber pop1790
# do
#     echo "[\"$stateName\", \"$pop1790\", \"$stateNumber\"]"
# done < <(cut -d "," -f2,3,5 census-time-table.csv)
# echo "]"

# var index = 1
# while index <= 28
for index in {5..32}
do
    echo "["
    # IFS="," read -r stateNameTitle stateNumberTitle censusTitle
    # echo "[\"NAME\", \"$censusTitle\", \"state\"],"
    while IFS="," read -r stateName stateNumber population
    do
        echo "[$stateName, \"$population\", $stateNumber],"
    done < <(cut -d "," -f2,3,$index census-time-table.csv)
    # index = index + 1
    if [ $index -lt 28 ]; then
        echo "],"
    else
        echo "]"
    fi
done
