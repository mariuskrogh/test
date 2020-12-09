export const cssStyle =
    `
<style>
ul  {
    margin:0;
    padding:0;
    list-style-type:none;
    display:inline-grid;
    grid-template-columns:1fr 1fr;
    grid-gap: 0px;
    justify-items: center;  
}
li {
    padding:0.5em;
    color: var(--none-text-color, #eee);
    background-color: var(--none-color, #333);
    min-width:2em;
    text-align:center;
    cursor:pointer;
}

li:hover {
    background-color: var(--none-color-hover, #666);
}
 
ul li:first-child{
    justify-self: end;
    border-right:solid 1px #999;
    border-top-left-radius: var(--border-radius,20%);
    border-bottom-left-radius: var(--border-radius,20%);
}

ul li:last-child{
    justify-self: start;
    border-left:solid 1px #999;
    border-top-right-radius: var(--border-radius,20%);
    border-bottom-right-radius: var(--border-radius,20%);
}
ul[value='true'] > #true-button{
    background-color: var(--true-color, #187c1e);
    color: var(--true-text-color, #fff);
}
ul[value='true'] > #true-button:hover{
    background-color: var(--true-color-hover,#18b423);
}
ul[value='false'] > #false-button{
    background-color: var(--false-color, #b91313);
    color: var(--false-text-color, #fff);
}
ul[value='false'] > #false-button:hover{
    background-color: var(--false-color-hover, #e82626);
}
</style>
`;
