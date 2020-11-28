import React from "react";

function List({ repos, func }) {
  return (
    <ul data-testid="repository-list">
      {repos.map((repo) => (
        <li className='item' key={repo.id}>
          {repo.title}
          <button onClick={() => func(repo.id)}>Remover</button>
        </li>
      ))}
    </ul>
  );
}

export default List;
