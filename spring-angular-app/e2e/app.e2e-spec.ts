import { SpringAngularAppPage } from './app.po';

describe('spring-angular-app App', function() {
  let page: SpringAngularAppPage;

  beforeEach(() => {
    page = new SpringAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
