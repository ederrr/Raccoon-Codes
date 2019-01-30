#select lines with (rated = TV-14) and (score > 95), then print them
#how to run:
#awk -F "," -f script.awk  netflix_base.csv

$2 == "TV-14" && $6 > 95 {
    print $1
}