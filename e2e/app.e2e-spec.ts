import { Angular2PracticeDemoPage } from './app.po';

describe('angular2-practice-demo App', () => {
  let page: Angular2PracticeDemoPage;

  beforeEach(() => {
    page = new Angular2PracticeDemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
