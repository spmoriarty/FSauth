// Enter Supabase Information
const SUPABASE_URL = 'https://xsjxkslcnzexkeuqopsq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzanhrc2xjbnpleGtldXFvcHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTI0MzIsImV4cCI6MTk2Nzg2ODQzMn0.6PW-I5jDnoqhgO6Egpvc5fEpprJ1jHfmAODRlCynp2I';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }    
}

export async function fetchPost() {
    const response = await client.from('post').select('*');
    console.log(post[0]);
    return response.data;

}
export async function checkAuth() {
    const user = getUser();

    if (!user) location.replace('/');


}