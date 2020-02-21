import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api/treenode';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  title = 'primeng-controls';
  files: TreeNode[];
  selectedFile: TreeNode;

  errorMessage = '';

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getFiles().subscribe({
      next: data => {
        this.files = data;
      },
      error: err => this.errorMessage = err
    });
  }

  nodeSelect(event) {
    console.log(event.node);
  }

  expandAll() {
    this.files.forEach(node => {
      this.expandRecursive(node, true);
    });
  }

  collapseAll() {
    this.files.forEach(node => {
      this.expandRecursive(node, false);
    });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }
}
