<script setup lang="ts">
import MenuItemTitle from "./misc/MenuItemTitle.vue";
import MenuItem from "./misc/MenuItem.vue";
</script>
<template>
    <div class="w-[16rem] h-full fixed transition-transform delay-75" id="layout-sidebar"> 
        <div class="layout-sidebar-header h-28 flex items-center justify-center">
          <span class="text-2xl uppercase font-semibold">
            <span style="color: var(--primary-color)">PRIME</span>
            <span> BUDGET</span>
          </span>
        </div>
        <div class="layout-sidebar-body flex flex-col justify-start w-full h-[72vh]">
          <div class="flex flex-col">
            <MenuItemTitle>
              DASHBOARDS
            </MenuItemTitle>
            <div class="py-4 flex flex-col">
              <MenuItem
                :icon="'pi pi-chart-bar'"
                :label="'transactions'"
                :navigateTo="'/dashboard/transactions'"
              />
            </div>
          </div>
          <div class="flex flex-col">
            <MenuItemTitle>
              MANAGEMENT
            </MenuItemTitle>
            <div class="py-4 flex flex-col">
              <MenuItem
                :icon="'pi pi-chart-line'"
                :label="'expense'"
                :navigateTo="'/management/expense/search'"
              />
              <ul class="list-none">
                <li>
                  <MenuItem
                    class="pl-7"
                    :icon="'pi pi-plus'"
                    :label="'new'"
                    :navigateTo="'/management/expense/new'"
                  />
                </li>
                <li>
                  <MenuItem
                    class="pl-7"
                    :icon="'pi pi-search'"
                    :label="'search'"
                    :navigateTo="'/management/expense/search'"
                  />
                </li>
              </ul>
              <MenuItem
                :icon="'pi pi-chart-line'"
                :label="'renevue'"
                :navigateTo="'/revenue/search'"
              />
              <ul class="list-none">
                <li>
                  <MenuItem
                    class="pl-7"
                    :icon="'pi pi-plus'"
                    :label="'new'"
                    :navigateTo="'/management/revenue/new'"
                  />
                </li>
                <li>
                  <MenuItem
                    class="pl-7"
                    :icon="'pi pi-search'"
                    :label="'search'"
                    :navigateTo="'/revenue/new'"
                  />
                </li>
              </ul>
              <MenuItem
                :icon="'pi pi-tag'"
                :label="'category'"
                :navigateTo="'/management/category/search'"
              />
              <ul class="list-none">
                <li>
                  <MenuItem
                    class="pl-7"
                    :icon="'pi pi-plus'"
                    :label="'new'"
                    :navigateTo="'/management/category/new'"
                  />
                </li>
                <li>
                  <MenuItem
                    class="pl-7"
                    :icon="'pi pi-search'"
                    :label="'search'"
                    :navigateTo="'/management/category/search'"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="layout-sidebar-footer flex flex-col border-t py-3">
          <MenuItem :label="'Log out'" :icon="'pi pi-sign-out'"  :navigateTo="'/'"/>
        </div>
      </div>
</template>
<style scoped>

#layout-sidebar.layout-sidebar-inactive{
  transition: transform 70ms;
  transform: translate(-100%);
}

#layout-sidebar {
  box-shadow: 0px 4px 50px #D9DDFC;
}
</style>