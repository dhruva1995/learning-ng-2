import { NinjaListPage } from './app.po';

describe('ninja-list App', function() {
  let page: NinjaListPage;

  beforeEach(() => {
    page = new NinjaListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
