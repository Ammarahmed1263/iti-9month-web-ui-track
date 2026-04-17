import { Component } from "@angular/core";
import { CardComponent } from "../card/card";

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.html",
  styleUrls: ["./card-list.css"],
  imports: [CardComponent],
})

export class CardListComponent {}