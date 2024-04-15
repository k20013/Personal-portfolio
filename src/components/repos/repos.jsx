import styles from './repos.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = "https://api.github.com/users/k20013/repos";

const Repos = () => {

  const [reposArray, setReposArray] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);

        setReposArray(response.data);
      } catch (error) {
        setReposArray(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={`${styles.reposContainer}`}>
      {reposArray.map((repo) => {

        if (repo.visibility === "public") return (

          <a href={repo.html_url}>
            <article className={styles.repoCard}>

              <h2>{repo.name}</h2>

              <p>{repo.description ? repo.description : repo.name}</p>

              <span>{repo.language}</span>
            </article>
          </a>

        )

      })}
    </section>
  )
}
export default Repos