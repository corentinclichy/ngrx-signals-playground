import { signalStoreFeature, type, withComputed } from '@ngrx/signals';
import { EntityComputed, NamedEntityComputed } from '@ngrx/signals/entities';
import { Product, storeConfig } from './global.store';
import { NamedEntitiesSingleSelectionComputed } from '@ngrx-traits/signals';
import { computed, inject } from '@angular/core';

type ConputedState = NamedEntityComputed<Product, 'product'> &
  NamedEntitiesSingleSelectionComputed<Product, 'product'>;

export function withSelectedEntityFeature() {
  return signalStoreFeature(
    {
      computed: type<ConputedState>(),
    },
    withComputed(({ productEntities, productEntitySelected }) => ({
      activeProducts: computed(() => {
        return productEntities().filter((product) => {
          return product.active;
        });
      }),
      isProductActive: computed(() => {
        return productEntitySelected()?.active;
      }),
    }))
  );
}
