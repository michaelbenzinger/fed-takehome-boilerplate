import styled from 'styled-components';
import breakpoints from '../breakpoints';

function Article(props) {
  const { article } = props;

  const ArticleWrapper = styled.a`
    display: block;
    background-color: white;
    padding: 0.88rem;
    box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.25);
    margin-bottom: 2rem;
    transition: color 0.4s, box-shadow 0.4s;
    &:hover {
      color: var(--gray-6);
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.12);
    }
  `;
  const ArticleImage = styled.div`
    background-color: ${article.color};
    height: 12.25rem;
    width: 100%;
    margin: 0 0 1.8rem;
  `;
  const ArticleContent = styled.div`
    padding: 0 0.5rem;
  `;
  const ArticleTitle = styled.h3`
    font-weight: 400;
    margin: 0 0 0.5rem;
  `;

  const dateOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  return (
    <ArticleWrapper>
      <ArticleImage />
      <ArticleContent>
        <ArticleTitle>{article.title}</ArticleTitle>
        <p>{article.date.toLocaleDateString('en-US', dateOptions)}</p>
        <p>{article.text}</p>
      </ArticleContent>
    </ArticleWrapper>
  );
}

function Articles(props) {
  const { articles } = props;

  const ArticlesSection = styled.section`
    margin-top: -7rem;
  `;
  const ArticlesContainer = styled.div`
    max-width: var(--container-width);
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    gap: 1.75rem;
    padding: 0 var(--page-margin);
    @media (max-width: ${breakpoints.sm}) {
      display: block;
    }
  `;

  return (
    <ArticlesSection>
      <ArticlesContainer>
        {articles.map(article => (
          <Article key={article.title} article={article} />
        ))}
      </ArticlesContainer>
    </ArticlesSection>
  );
}

export default Articles;
