import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Repos() {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {  
      const res = await fetch('https://api.github.com/users/oadenekan/repos');
      const data = await res.json();
      setUser(data);
      setLoading(false);
    }
    fetchUsers();

    // Cleanup function
    // return () => {
    //   prevStateUpdate.current = true;
    // };
  }, []);
// console.log(user,'user')

  const PER_PAGE = 5;
  const total = user?.length;
  const pages = Math.ceil(total/PER_PAGE);
  const skip = page * PER_PAGE - PER_PAGE;

  if (loading) {
    return <p>Loading...</p>;
  }

//   if (!loading && error) {
//     return <p>Error</p>;
//   }

  return (
    <div>
      <h1>MY GITHUB REPOSITORY</h1>
      <ol>
      {user?.slice(skip, skip + PER_PAGE).map((repo, index) => (<li key={index}><Link to={`repo/${index+1}`}>{repo.html_url}</Link></li>))}
      </ol>
    <div className='button-nav'>
        {
          <button
            disabled={page <= 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            prev
          </button>
        }
        {Array.from({ length: pages }, (value, index) => index + 1).map(
          (each, index) => (
            <button key={index} onClick={() => setPage(each)}>{each}</button>
          )
        )}
        {
          <button
            disabled={page >= pages}
            aria-disabled={page >= pages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            next
          </button>
        }
      </div>

      <p className="pagination">
        Pages: {page} of {pages}
      </p>
    </div>
  );
}