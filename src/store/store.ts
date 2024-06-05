/* eslint-disable no-param-reassign */
import { t, Instance } from 'mobx-state-tree';
import { perPage } from '../models/meterType.enum';
import { MeterStore } from './meterStore';

export const RootStore = t
  .model('RootStore', {
    meterStore: t.optional(MeterStore, {
      metersArray: { count: 0, results: [] },
      isLoading: false,
      currentPage: { page: 1, offset: 0 },
    }),
  })
  .views((self) => ({
    get isLoading() {
      return self.meterStore.isLoading;
    },
    get getMeters() {
      return self.meterStore.metersArray.results;
    },
    get getPagination() {
      return Math.ceil(self.meterStore.metersArray.count / 20);
    },
    get getCurrent() {
      return self.meterStore.currentPage;
    },
  }))
  .actions((self) => ({
    afterCreate() {
      self.meterStore.fetchMeters(perPage, 0);
    },
    deleteMeter(id: string, _limit: number, offset: number) {
      self.meterStore.meterDelete(id, perPage, offset);
    },
    setPage(_limit: number, offset: number) {
      self.meterStore.fetchMeters(perPage, offset);
      self.meterStore.currentPage.page = offset / perPage;
      self.meterStore.currentPage.offset = offset;
    },
  }));

export interface IRootStore extends Instance<typeof RootStore> {}
