import { defineStore } from 'pinia'
import {item} from "hoardhog-api"

export const useItemStore = defineStore('item', {
    state: () => ({
        itemMap: new Map() as Map<number, typeof item>,
    }),
    getters: {
        itemList (state){
            return Array.from(state.itemMap.values());
          },
        empty () {
            return item.instance({})
        }
        },
    actions: {
        async fetchItems() {
            try {
                const items = await item.all()
                this.itemMap = items
            }
            catch (err) {
                console.log(err)
            }
        },
        async findItem(id: number) : Promise<typeof item> {
            try {
                if (this.itemMap.size === 0) {
                    await this.fetchItems()
                }
                const res = this.itemMap.get(id)
                if (res) {
                    return res
                } else {
                    const res = await item.get(id)
                     this.itemMap.set(res.id, res)
                     return res

                }
            } catch (err) {
                console.log(err)
                return item
            }
        }
    }
  })