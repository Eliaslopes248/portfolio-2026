
import { createClient }     from '@supabase/supabase-js'
const supabaseUrl           = import.meta.env.VITE_SUPABASE_URL || null;
const supabaseKey           = import.meta.env.VITE_ANON_KEY || null;
let supabaseClient:any      = null;

/**
 * get client singleton
 * @returns client
 */
async function getClient() : Promise<any>
{
    if (!supabaseClient){
        supabaseClient = createClient(supabaseUrl, supabaseKey);
    }
    return supabaseClient;
}

/**
 * gets all projects from db
 * @returns array of project objects
 */
export async function getProjects() : Promise<any>
{
    try {
        /** get client object */
        const client:any   = await getClient();
        let { data: projects, error }       = await client
        .from('projects')
        .select('*')
        /** handle error */
        if (error){console.error("[ERROR] error when fetching projects");}
        console.log("[SUCCESS] Projects found!");
        /** return results */
        return projects;

    } catch (error) {
        console.error("[EXCEPTION] error when fetching projects");
        console.error(error);
        return null;
    }
}