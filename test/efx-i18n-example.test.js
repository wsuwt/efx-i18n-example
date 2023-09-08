// The test runner can be configured with a configuration file (web-test-runner.config.js).
// https://modern-web.dev/docs/test-runner/overview/
import { expect, fixture } from '@refinitiv-ui/test-helpers';

// import element and theme
import '../src/efx-i18n-example.ts';
import '../themes/halo/dark.js';

describe('EfxI18nExampleTest', function () {
  it('Label and DOM structure is correct', async function () {
    const el = await fixture('<efx-i18n-example></efx-i18n-example>');
    await expect(el).shadowDom.to.equalSnapshot({ ignoreAttributes: ['class', 'style'] });
    expect(el.count).to.equal(0);
    const button = el.shadowRoot.querySelector('[part=button]');
    button.click();
    expect(el.count).to.equal(1);
  });
});
