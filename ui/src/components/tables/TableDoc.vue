<template>
    <table class="table table-striped task-table mt-3">
        <thead class="thead-light">
        <tr>
            <th><input type="checkbox"></th>
            <th></th>
            <th>Задания</th>
            <th style="width: 15%">Документ</th>
            <th style="width: 38%">Краткое содержание</th>
            <th>От кого</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(row, index) in tableDoc" :key="index" @dblclick="openToCard(row.r_object_id)">
            <th scope="row">
                <input type="checkbox">
            </th>
            <td class="tab_star">
                <span v-bind:class="icon ? 'star_t far fa-star' : 'star_t fas fa-star' "></span>
            </td>
            <td class="">
                <div class=" row header_tab_doc">На согласование</div>
                <div class="row">Дата {{row.r_creation_date| moment("DD-MM-YYYY")}} г.</div>
                <div class="row">Срок {{row.r_modify_date|  moment("DD-MM-YYYY")}} г.</div>
            </td>
            <td class="text-center">
                                    <span v-bind:class="'badge badge-info'">
                                        {{row.dss_kind}}
                                    </span>
                <br> {{row.dss_doc_number}} от {{row.dss_doc_date | moment("DD-MM-YYYY")}}
            </td>
            <td class="">
                                            <span class="summary">
                                                {{row.dss_requester_name}}
                                            </span>
                <br>
                <span class="text-muted">
                                        {{row.dss_name}}
                                    </span>
            </td>
            <td class="w-25">
                <div class="row">
                    <div class="col-auto">
                        <i v-bind:class="'far fa-user-circle fa-3x '"></i>
                    </div>
                    <div class="col">
                        <span class="summary">{{row.r_creator_name}}</span>
                        <br>
                        <span class="text-muted ">{{row.dss_dep}}</span>
                    </div>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
  export default {
    name: 'TableDoc',
    data () {
      return {
        icon: true
      }
    },
    methods: {
      openToCard (id) {
        this.$router.push(
          {
            name: 'Card',
            params: {id}
          }
        )
      }
    },
    props: [
      'tableDoc'
    ]
  }
</script>

<style scoped>
    .header_tab_doc{
        color: #1e88e5;
        font-weight: bold;
    }
    .summary{
        font-weight: bold;
    }
    .tab_star a{
        color: #455a64;
    }
    .tab_star {
        color: #455a64;
    }
    .task-table{
        font-size: 1.1rem;
        line-height: 1.8em;
    }
</style>
