import SymbolTile from '../src/components/SymbolTile.vue';
import { shallowMount } from '@vue/test-utils'


describe('SymbolTile.vue', () => {
  let wrapper;
  const mockSymbolData = {
    displaySymbol: 'AAPL',
    description: 'Apple Inc.',
    currency: 'USD',
    mic: 'XNAS',
    figi: 'BBG000B9XRY4',
    shareClassFIGI: 'BBG001S5N8V8',
    type: 'Common Stock',
    symbol: 'AAPL'
  };

  beforeEach(() => {
    wrapper = shallowMount(SymbolTile, {
      propsData: { symbolData: mockSymbolData },
      mocks: {
        $router: {
          push: jest.fn()
        }
      }
    });
  });

  it('renders symbol data correctly', () => {
    expect(wrapper.find('.title.is-4').text()).toBe(mockSymbolData.displaySymbol);
    expect(wrapper.find('.subtitle.is-5').text()).toBe(mockSymbolData.description);
    expect(wrapper.text()).toContain(mockSymbolData.currency);
    expect(wrapper.text()).toContain(mockSymbolData.mic);
    expect(wrapper.text()).toContain(mockSymbolData.figi);
    expect(wrapper.text()).toContain(mockSymbolData.shareClassFIGI);
    expect(wrapper.text()).toContain(mockSymbolData.type);
  });

  it('navigates to ticker details page on button click', async () => {
    const button = wrapper.find('.button.is-link');
    await button.trigger('click');
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith({ name: 'tickerDetails', params: { symbol: mockSymbolData.symbol } });
  });


  it('button is present and has the correct text', () => {
    const button = wrapper.find('.button.is-link');
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe('View Details');
  });
});
