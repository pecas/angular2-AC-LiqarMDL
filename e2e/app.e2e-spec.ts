import { Angular2ACLiqarMDLPage } from './app.po';

describe('angular2-ac-liqar-mdl App', function() {
  let page: Angular2ACLiqarMDLPage;

  beforeEach(() => {
    page = new Angular2ACLiqarMDLPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
