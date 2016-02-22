import $ from 'jquery';
import _ from 'ramda';
import Handlebars from 'handlebars';
import datastore from './src/datastore';

const renderTemplate = _.curry((html, context) => {
  /**** IMPURE FUNCTION ****/
  const theTemplateScript = html;
  // Compile the template
  const theTemplate = Handlebars.compile(theTemplateScript);
  const theCompiledHtml = theTemplate(context);
  $('#container').append(theCompiledHtml);
});

const renderArticles = (articles) => {
  $('#container').html('');
  const renderArticle = renderTemplate($("#article-template").html());
  _.map(renderArticle, datastore.articles);
}

const renderDeposits = (deposits) => {
  $('#container').html('');
  const renderDeposit = renderTemplate($("#deposit-template").html());
  _.map(renderDeposit, datastore.deposits);
}

renderArticles(datastore.articles);
$('#reclaim-btn').click(() => {
  renderDeposits(datastore.deposits);
});
$('#home-btn').click(() => {
  renderArticles(datastore.articles);
});


(function () { // Broken web3 contact
  var value = Math.round(Math.random()*300);
  SimpleStorage.addArticle(44, 'test', 'testagain');
  // debugger;
  // web3.toAscii(SimpleStorage.storedData());
  // SimpleStorage.articles();
  const loop = () => {
    setTimeout(() => {
      console.log('Current value ' + SimpleStorage.storedData());
      loop();
    }, 1000);
  }
  loop();
})();
