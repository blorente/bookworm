
import Navbar from "./Navbar";
import Editor from "./Editor";
import { gql, useQuery } from "@apollo/client";

const repo = "decorat";
const file = "wiki/stories/01_the_promotion.md";
const owner = "blorente";

const GET_FILE_QUERY = gql`
query {
        repository(name: "${repo}", owner: "${owner}") {
          object(expression: "HEAD:${file}") {
            ... on Blob {
              text
            }
          }
        }
      }

`

function Bookworm() {
  const {loading, error, data} = useQuery(GET_FILE_QUERY)
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :({error.message})</p>;
  console.log(data);
  return (
    (<div>{/* <Navbar /> */}</div>),
    (
      <div>
        <Editor contents={data.repository.object.text} />
      </div>
    )
  );
}

export default Bookworm;
