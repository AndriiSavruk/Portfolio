import { $ } from '@wdio/globals'

class TrnsexpensesPage {

    get userEmail () {return $('//*[@id="root"]/header/div/div[3]/p')};
}

export default new TrnsexpensesPage();