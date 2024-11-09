import React from 'react'
import './LatestArticlesItem.css';
const LatestArticlesItem = (Props) => {
  return (
    <div className='articles-item'>
      <img src={Props.articlesIMG} alt='#' />
      <div className='inner-articles-item'>
      <span>{Props.articlesSpan}</span>
      <h3 className='article-title'>{Props.articlesTitle}</h3>
      <p>{Props.articlesParagraph}</p>
      </div>
    </div>
  )
}

export default LatestArticlesItem
