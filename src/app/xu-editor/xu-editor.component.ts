import { Component, EventEmitter } from '@angular/core';
import { Constants } from '../utils/config';

@Component({
    selector: 'app-xu-editor',
    templateUrl: './xu-editor.component.html',
    styleUrls: ['./xu-editor.component.scss']
})
export class XuEditorComponent {
    public textToXutter: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias asperiores, culpa sapiente. Eum magnam, accusantium voluptate accusamus sequi. Amet voluptatum maxime quisquam, aperiam similique. Repellat eius tenetur, amet non eligendi numquam, officia iusto, nobis molestiae doloribus ipsum animi expedita. Eos, veniam atque tenetur incidunt, repudiandae est, asperiores beatae maxime et illum voluptas reprehenderit architecto at? Vitae maiores, nam, repudiandae quis repellendus minima mollitia laborum! Quisquam perspiciatis incidunt harum quaerat pariatur laudantium, non eveniet suscipit sunt. Quo accusantium nulla, dolore quae possimus recusandae repellendus autem nihil! Tempora harum a dolor facere molestias nostrum sequi accusantium nemo quam, provident incidunt laudantium veritatis ipsum impedit autem nisi obcaecati vel illum voluptatum iste dignissimos aliquam? Adipisci soluta voluptatibus aliquam est, mollitia, quae maiores odio, veritatis';
    public tweetsGenerated: Array<string> = [];

    constructor() { }

    public calculateTweet() {
        if (!!this.textToXutter) {
            for (let i = 0; i < this.textToXutter.length; i++) {
                this.textToXutter[i];
            }
            console.log(this.tweetsGenerated);
        }
    }

}
