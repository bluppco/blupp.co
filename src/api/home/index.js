export const homeAPI = async () => {

    const endpoint = "https://staging.api.blupp.co"

    // NETWORK CALL TO GET DATA
    const network_data = await fetch( endpoint + "/home" )
    const data_json = await network_data.json()

    const { home, work, projects, blogs, pricing } = data_json.data

    let home_data = {

        // HOME PROPS
        hero : "",
        how_we_work : "",
        tech_stack : "",
        clients : "",
        projects : "",
        blogs : "",
        about : "",
        pricing : "",

    }
    home.map( ( data ) => {

        if( data.slug === "hero" )
            home_data.hero = data
        else if( data.slug === "how-we-work" )
            home_data.how_we_work = data
        else if( data.slug === "tech-stack" )
            home_data.tech_stack = data
        else if( data.slug === "clients" )
            home_data.clients = data
        else if( data.slug === "projects" )
            home_data.projects = data
        else if( data.slug === "blogs" )
            home_data.blogs = data
        else if( data.slug === "about" )
            home_data.about = data
        else if( data.slug === "pricing" )
            home_data.pricing = data

    })

    return { home_data, work, projects, blogs, pricing }

}
