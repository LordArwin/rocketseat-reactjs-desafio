import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import List from "./components/List";
import api from "./services/api";

import "./styles.css";

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    api.get("/repositories").then((response) => setRepos(response.data));
  }, []);

  async function handleAddRepository() {
    const response = await api.post("/repositories", {
      title: `repositorie ${Date.now()}`,
      url: "www.codificador.com",
      techs: ["Delphi"],
    });
    setRepos([...repos, response.data]);
  }

  async function handleRemoveRepository(id) {
    await api.delete(`/repositories/${id}`);
    const repoIndex = repos.findIndex((repo) => repo.id === id);
    const repositories = [...repos];
    repositories.splice(repoIndex, 1);
    setRepos(repositories);
  }

  return (
    <>
      <Header />
      <div className = 'content'>
        <List repos={repos} func={handleRemoveRepository} />

        <button onClick={handleAddRepository}>Adicionar</button>
      </div>
    </>
  );
}

export default App;
