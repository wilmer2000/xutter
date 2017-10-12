import { XutterPage } from './app.po';

describe('xutter App', function() {
  let page: XutterPage;

  beforeEach(() => {
    page = new XutterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
