import { AlgoGenerator, Node, SortingAlgo } from '../../types';
import bubbleSortIterator from './sorting/bubbleSort';
import insertionSortIterator from './sorting/insertionSort';
import mergeSortIterator from './sorting/mergeSort';
import quickSortIterator from './sorting/quickSort';
import selectionSortIterator from './sorting/selectionSort';

const SORTING_ITERATORS = new Map<
    SortingAlgo,
    (nodes: Node[]) => AlgoGenerator
>([
    [SortingAlgo.BUBBLE, (nodes) => bubbleSortIterator(nodes)],
    [SortingAlgo.INSERTION, (nodes) => insertionSortIterator(nodes)],
    [SortingAlgo.SELECTION, (nodes) => selectionSortIterator(nodes)],
    [SortingAlgo.QUICK, (nodes) => quickSortIterator(nodes)],
    [SortingAlgo.MERGE, (nodes) => mergeSortIterator(nodes)],
]);

export default SORTING_ITERATORS;
