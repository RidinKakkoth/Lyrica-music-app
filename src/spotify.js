const authEdpoint="https://accounts.spotify.com/authorize?"
const clientID="87d5b873a33540b6a2504add1f5dab86"
const redirectUrl="http://localhost:3000"
const scopes=["user-library-read,playlist-read-private"]

export const loginEndpoint=`${authEdpoint}client_id=${clientID}&redirect_uri=${redirectUrl}&scopes=${scopes.join('%20')}&response_type=token&show_dialog=true`;
// https://accounts.spotify.com/authorize?client_id=87d5b873a33540b6a2504add1f5dab86&redirect_uri=http://localhost:3000&scopes=user-library-read,playlist-read-private&response_type=token&show_dialog=true
