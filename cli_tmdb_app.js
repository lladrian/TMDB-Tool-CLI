const parseArgs = () => {
    const args = process.argv.slice(2);
    const options = {};
    let command = null;
    // If the first arg does NOT start with '--', treat it as the command
    if (args.length > 0 && !args[0].startsWith('--')) {
        command = args[0];
    }
    // Parse options from the rest of the args
    for (let i = command ? 1 : 0; i < args.length; i++) {
        const arg = args[i];
        if (arg.startsWith('--')) {
            const key = arg.slice(2);
            // Value is next arg if exists and not another option
            const nextArg = args[i + 1];
            if (nextArg && !nextArg.startsWith('--')) {
                options[key] = nextArg;
                i++; // Skip the next arg as it is the value
            } else {
                // No value provided; treat as boolean flag
                options[key] = true;
            }
        }
    }
    return { command, options };
};


async function movie_type(_type) {
    try {
        const url = "https://api.themoviedb.org/3/movie/"
        const apiKey = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWVjMTZmZjdjYTg2NTRjOTRiMDdiOTE1M2E1MTFkNSIsIm5iZiI6MTc0MTExMjIxMS40MDEsInN1YiI6IjY3Yzc0MzkzMjZiNGUxOTZiMWYwNjg0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A5ncA27ozebdizyFYR3vFjsR3CwLqXx9VBTK41FELxk"
        const types = ["now_playing", "upcoming", "top_rated", "popular"]


        const foundType = types.find(type => type == _type)

        if (_type == "undefined") {
            throw new Error(`Type is not provided, please provide _type`)
        } else if (!foundType) {
            throw new Error(`Please provide a valid type not ${_type}`)
        }

        const jsonData = await fetch(`${url}${_type}`, { method: "GET", headers: { Authorization: apiKey } });
        const movies = await jsonData.json()


        let output = "# ID           Title                               Date                    Genre\n";

        movies.results.forEach(movie => {
            const id = movie.id.toString().padStart(8, ' ');
            const original_title = movie.original_title.toString().padEnd(35, ' ');
            const release_date = movie.release_date.toString().padStart(10).padEnd(10);
            output += `# ${id}     ${original_title}      ${release_date}              ${_type}\n`;
        });
        console.log(output);
    } catch (err) {
        // console.log("RAN INTO AN ERR....", err)
        console.error(err)
    }
}


const main = () => {
    const { options } = parseArgs();
    movie_type(options.type);
}

main();