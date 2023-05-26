import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';

import SearchResultsPage from '@/pages/SearchResultsPage.vue';
import { useBreakpointStore } from '@/stores/BreakpointStore';
import { useFavoriteStore } from '@/stores/FavoriteStore';
import { useHomeStore } from '@/stores/HomeStore';
import { useUserAgentStore } from '@/stores/UserAgentStore';

describe('SearchResultsPage', () => {
  it('renders.', () => {
    /* eslint-disable no-unused-vars */
    const pinia = createTestingPinia();
    const breakpointStore = useBreakpointStore();
    const favoriteStore = useFavoriteStore();
    const homeStore = useHomeStore();
    const userAgentStore = useUserAgentStore();
    /* eslint-enable no-unused-vars */

    const wrapper = mount(SearchResultsPage, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: true,
        },
      },
    });

    expect(wrapper.html()).toBeTruthy();
  });
});
