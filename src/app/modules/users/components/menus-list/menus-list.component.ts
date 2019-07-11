import { Component, Injectable, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { of as ofObservable, Observable, BehaviorSubject } from 'rxjs';

export class MenuItemNode {
  children: MenuItemNode[];
  item: string;
  color: string;
}

/** Flat to-do item node with expandable and level information */
export class MenuItemFlatNode {
  item: string;
  level: number;
  expandable: boolean;
}

const TREE_DATA = {
  'Menúes AP5': {
    'Operatoria': ['Portfolio',
      'Operaciones',
      'Nocionales',
      'Canceladas'],
    'Garantías': [
      'Movimientos',
      'Stock Garantías',
      'Activos Aceptados',
      'Saldos Finalidades'
    ],
    'Cuentas': [
      'Cuentas de Registro',
      'Solicitud Alta',
      'Actualizar Cuentas'
    ]
  },
  'Menúes RMv4': {
    'Saldo Consolidado': ['Saldo Consolidado'],
    'Márgenes': [
      'Márgenes'
    ],
  }

};


@Injectable()
export class ChecklistDatabase {
  dataChange: BehaviorSubject<MenuItemNode[]> = new BehaviorSubject<MenuItemNode[]>([]);

  get data(): MenuItemNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Build the tree nodes from Json object. The result is a list of `MenuItemNode` with nested
    //     file node as children.
    const data = this.buildFileTree(TREE_DATA, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `MenuItemNode`.
   */
  buildFileTree(value: any, level: number) {
    let data: any[] = [];
    
    for (let k in value) {
      let v = value[k];
      let node = new MenuItemNode();
      node.item = `${k}`;
      if (v === null || v === undefined) {
        // no action
      } else if (typeof v === 'object') {
        node.color = level == 0 ? '#95E4C2' : level == 1 ? '#D1F4E5' : level == 2 ? '#FFF' : '#FFF';
        node.children = this.buildFileTree(v, level + 1);        
      } else {
        node.item = v;
      }
      data.push(node);
    }
    return data;
  }


}


@Component({
  selector: 'app-menus-list',
  templateUrl: './menus-list.component.html',
  styleUrls: ['./menus-list.component.scss'],
  providers: [ChecklistDatabase]
})
export class MenusListComponent implements OnInit, AfterViewInit {
  @ViewChild('tree', {static : false}) tree;
  flatNodeMap: Map<MenuItemFlatNode, MenuItemNode> = new Map<MenuItemFlatNode, MenuItemNode>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap: Map<MenuItemNode, MenuItemFlatNode> = new Map<MenuItemNode, MenuItemFlatNode>();

  /** A selected parent node to be inserted */
  selectedParent: MenuItemFlatNode | null = null;


  treeControl: FlatTreeControl<MenuItemFlatNode>;

  treeFlattener: MatTreeFlattener<MenuItemNode, MenuItemFlatNode>;

  dataSource: MatTreeFlatDataSource<MenuItemNode, MenuItemFlatNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<MenuItemFlatNode>(true /* multiple */);

  constructor(private database: ChecklistDatabase) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<MenuItemFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }
  
  ngOnInit() { }

  ngAfterViewInit() {
    this.tree.treeControl.expandAll();
  }

  getLevel = (node: MenuItemFlatNode) => { return node.level; };

  isExpandable = (node: MenuItemFlatNode) => { return node.expandable; };

  getChildren = (node: MenuItemNode): Observable<MenuItemNode[]> => {
    return ofObservable(node.children);
  }

  hasChild = (_: number, _nodeData: MenuItemFlatNode) => { return _nodeData.expandable; };

  hasNoContent = (_: number, _nodeData: MenuItemFlatNode) => { return _nodeData.item === ''; };

  /**
   * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
   */
  transformer = (node: MenuItemNode, level: number) => {
    let flatNode = this.nestedNodeMap.has(node) && this.nestedNodeMap.get(node)!.item === node.item
      ? this.nestedNodeMap.get(node)!
      : new MenuItemFlatNode();
    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.expandable = !!node.children;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  /** Whether all the descendants of the node are selected */
  descendantsAllSelected(node: MenuItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    return descendants.every(child => this.checklistSelection.isSelected(child));
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: MenuItemFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: MenuItemFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);
  }


  showSelected() {
    console.log(this.checklistSelection);
  }
}
