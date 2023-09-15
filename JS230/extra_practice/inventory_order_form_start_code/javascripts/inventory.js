var inventory;

(function() {
  inventory = {
    lastId: 0,
    collection: [],
    setDate: function() {
      var date = new Date();
      $("#order_date").text(date.toUTCString());
    },
    cacheTemplate: function() {
      var $iTmpl = $("#inventory_item").remove();
      this.template = $iTmpl.html();
    },
    add: function() {
      this.lastId++;
      var item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },
    remove: function(idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },
    get: function(id) {
      var found_item;

      this.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },
    update: function($item) {
      var id = this.findID($item),
          item = this.get(id);

      item.name = $item.find("[name^=item_name]").val();
      item.stock_number = $item.find("[name^=item_stock_number]").val();
      item.quantity = $item.find("[name^=item_quantity]").val();
    },
    newItem: function(e) {
      e.preventDefault();
      var item = this.add(),
          $item = $(this.template.replace(/ID/g, item.id));

      $("#inventory").append($item);
    },
    findParent: function(e) {
      return $(e.target).closest("tr");
    },
    findID: function($item) {
      return +$item.find("input[type=hidden]").val();
    },
    deleteItem: function(e) {
      e.preventDefault();
      var $item = this.findParent(e).remove();

      this.remove(this.findID($item));
    },
    updateItem: function(e) {
      var $item = this.findParent(e);

      this.update($item);
    },
    bindEvents: function() {
      $("#add_item").on("click", $.proxy(this.newItem, this));
      $("#inventory").on("click", "a.delete", $.proxy(this.deleteItem, this));
      $("#inventory").on("blur", ":input", $.proxy(this.updateItem, this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

$($.proxy(inventory.init, inventory));

// ...

document.addEventListener('DOMContentLoaded', () => {
  let App = {
    lastId: 0,
    collection: [],

    init() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    },

    setDate() {
      let date = new Date();
      document.querySelector('#order_date').textContent = date.toUTCString()
    },

    cacheTemplate() {
      let iTmpl = document.querySelector("#inventory_item");
      this.template = Handlebars.compile(iTmpl.innerHTML);
      iTmpl.remove()
    },

    bindEvents() {
      document.querySelector("#add_item").addEventListener(
        "click", 
        this.newItem.bind(this)
      );
      document.querySelector("#inventory").addEventListener("click", event => {
        if (!event.target.matches('a.delete')) return
        this.deleteItem.bind(this)(event)
      });
      document.querySelector("#inventory").addEventListener("blur", event => {
        if (!event.target.matches(':input')) return
        this.updateItem.bind(this)(event)
      })
    },
    newItem(e) {
      e.preventDefault();
      let item = this.add();
      document.querySelector("#inventory").insertAdjacentHTML('beforeend', this.template(item));
    },

    deleteItem(e) {
      e.preventDefault();
      let item = this.findParent(e).remove();

      this.remove(this.findID(item));
    },

    updateItem: function(e) {
      let item = this.findParent(e);

      this.update(item);
    },

    add() {
      this.lastId += 1;
      let item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },

    findParent(e) {
      return e.target.closest("tr");
    },

    findID(item) {
      return Number(item.querySelector("input[type=hidden]").value)
    },

    update(itemRow) {
      let id = this.findID(itemRow),
      item = this.get(id);

      item.name = itemRow.querySelector("[name^=item_name]").value;
      item.stock_number = itemRow.querySelector("[name^=item_stock_number]").value;
      item.quantity = itemRow.querySelector("[name^=item_quantity]").value;
    },
  }

  App.init()
})
