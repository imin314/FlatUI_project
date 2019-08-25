class DropDown {
  constructor(domElement) {
    this.domElement = domElement;
    this.namespace = this.domElement.className;
    this.initialize();
  }

  findChild(name) {
    let names = name.split(' ');
    let searchPattern = '.' + this.namespace + '__' + names[0];
    for (let i = 1; i < names.length; i++) {
      searchPattern += ', .' + this.namespace + '__' + names[i];
    }
    return $(this.domElement).find(searchPattern);
  }

  initialize() {
    $(document).ready(() => {
      let list = this.findChild('list');
      let activeClass = `${this.namespace  }__list_active`;
      let label = this.findChild('label');

      this.findChild('button label').click(() => {
				list.toggleClass(activeClass);
			});

      this.findChild('item').click(function () {
        let option = $(this).text();
        list.removeClass(activeClass);
        label.text(option);
      });
    });
  }
}

$('.drop-down').each(function () {
  new DropDown(this);
});
