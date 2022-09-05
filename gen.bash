#!/bin/sh
# POSIX

die() {
    printf '%s\n' "$1" >&2
    exit 1
}
create() { 
    mkdir -p "$(dirname "$1")" && touch "$1" ; 
}
createStyles() {
    cat << EOF >> $1
import { createStyles } from "@mantine/core";

export default createStyles((theme) => {

})
EOF
}
createJSXwithStyles() {
    cat << EOF >> $1
import useStyles from "./${2}.styles";

${3} export interface ${2}Props {
${3}   props: string;
${3} }

export function ${2}(
    ${3} { props }: ${2}Props
) {
    const { classes } = useStyles();

    return <></>;
}
EOF
}
createJSX() {
    cat << EOF >> $1
${3} export interface ${2}Props {
${3}   props: string;
${3} }

export function ${2}(
    ${3} { props }: ${2}Props
) {
    return <></>;
}
EOF
}
createIndex(){
    cat << EOF >> $1

export { ${2} } from "./${2}";
${3} export type { ${2}Props } from "./${2}";
EOF
}

# Initialize all the option variables.
# This ensures we are not contaminated by variables from the environment.
declare name=$1;
dir="atoms/"
styles=0
prop="//"

while :; do
    case $2 in
        -a|--atom)
            dir="atoms/"
            ;;
        -t|--template)
            dir="templates/"
            ;;
        -o|--organism)
            dir="organisms/"
            ;;
        -m|--molecule)
            dir="molecules/"
            ;;
        -s|--style)
            styles=1
            ;;
        -p|--props)
            props=1
            ;;
        # -f|--file)       # Takes an option argument; ensure it has been specified.
        #     if [ "$2" ]; then
        #         file=$2
        #         shift
        #     else
        #         die 'ERROR: "--file" requires a non-empty option argument.'
        #     fi
        #     ;;
        # --file=?*)
        #     file=${1#*=} # Delete everything up to "=" and assign the remainder.
        #     ;;
        # --file=)         # Handle the case of an empty --file=
        #     die 'ERROR: "--file" requires a non-empty option argument.'
        #     ;;
        # -v|--verbose)
        #     verbose=$((verbose + 1))  # Each -v adds 1 to verbosity.
        #     ;;
        --)              # End of all options.
            shift
            break
            ;;
        -?*)
            printf 'WARN: Unknown option (ignored): %s\n' "$1" >&2
            ;;
        *)               # Default case: No more options, so break out of the loop.
            break
    esac

    shift
done

if [[ "${props}" -eq 1 ]] ; then
        prop=''
    fi

if [[ "${styles}" -eq 1 ]] ; then
    for i in ${name}.styles.ts ${name}.tsx index.ts ; do 
        create "components/${dir}/${name}/${i}";
    done

    createStyles "components/${dir}/${name}/${name}.styles.ts";
    createJSXwithStyles "components/${dir}/${name}/${name}.tsx" $name $prop;
    createIndex "components/${dir}/${name}/index.ts" $name $prop;
    createIndex "components/${dir}/index.ts" $name $prop;
else
    create "components/${dir}/${name}.tsx";
    createJSX "components/${dir}/${name}.tsx" $name $prop;
    createIndex "components/${dir}/index.ts" $name $prop;
fi

# printf "hello"