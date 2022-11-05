import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function RepoDetails() {
  const [details, setDetails] = useState([]);
  const {repoName} = useParams();
  useEffect(() => {
    async function getDetails() {
      if (repoName) {
        const res = await fetch(`https://api.github.com/repos/oadenekan/${repoName}`);
        const singleDetail = await res.json();
        setDetails(singleDetail);
      }
    }
    getDetails();
  }, [repoName])

  return (
    <div className="content">
      {details.length === 0 ? (
        <p></p>
      ) : (
        <div>
          <h2>{details.name.toUpperCase()} REPOSITORY DETAILS</h2>
          <div>
            <label>Name: </label>
            <span>{details.name}</span>
          </div>
          <div>
            <label>Languaue: </label>
            <span>{details.created_at}</span>
          </div>
          <div>
            <label>Languaue: </label>
            <span>{details.language}</span>
          </div>
          <div>
            <label>Forks Count: </label>
            <span>{details.forks}</span>
          </div>
          <div>
            <label>Stars: </label>
            <span>{details.stargazers_count}</span>
          </div>
          <div>
            <label>Repo ID :</label>
            <span>{details.id}</span>
          </div>
        </div>
    )
      }
    </div>
  );

}
