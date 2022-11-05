import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RepoDetails from './RepoDetails';

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
  }, []);

  const PER_PAGE = 10;
  const total = user.length;
  const pages = Math.ceil(total/PER_PAGE);
  const skip = page * PER_PAGE - PER_PAGE;

  // if (loading) {
  //   <p>Loading...</p>;
  // }
  return (
    <div className="content">
      <h1>MY GITHUB REPOSITORIES</h1>
      <ol className="contact-list">
      {
        user? user.slice(skip, skip + PER_PAGE).map((repo, index) => {
          return (
            <li key={index} className="repo-link">
              <Link to={`/${repo.name}`}>{repo.html_url}</Link>
            </li>
          )
        })
        :
        loading && <p>Loading...</p>
    }
      </ol>
      <RepoDetails details={user}/>

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