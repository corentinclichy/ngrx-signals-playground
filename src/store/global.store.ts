import { signalStore, type } from '@ngrx/signals';
import { entityConfig, withEntities } from '@ngrx/signals/entities';
import { withEntitiesSingleSelection } from '@ngrx-traits/signals';
import { withSelectedEntityFeature } from './selectedEntity.feature';

export interface Product {
  id: string;
  name: string;
  price: string;
  active: boolean;
}

export const storeConfig = entityConfig({
  entity: type<Product>(),
  collection: 'product',
  selectId: (project) => project.id,
});

export const AssessmentStore = signalStore(
  { providedIn: 'root', protectedState: false },
  withEntities(storeConfig),
  withEntitiesSingleSelection(storeConfig),
  withSelectedEntityFeature()
);
