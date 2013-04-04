
var hash_tricks = {};
var hash_hash = {};
var hash = {};

var span_scroll = 0;

function sf_scroll_trick( tricks )
{
	var i = "";
	for( i in tricks )
	{
		var arr = tricks[i].split( "," );
		var increment = parseInt( ( parseInt( arr[2] ) - parseInt( arr[1] ) ) / 100 );
		var count = ( ( parseInt( arr[2] ) - parseInt( arr[1] ) ) - increment * 100 );
		var num = 0;

		while ( num <= 100 )
		{
			if ( parseInt(arr[1]) + count + "" in hash_tricks )
			{
				hash_hash = {};
				hash_hash[arr[0]] = num;

				hash_tricks[parseInt(arr[1]) + count][i] = hash_hash;			
			}
			else
			{
				hash_hash = {};
				hash_hash[arr[0]] = num;

				hash = {};
				hash[i] = hash_hash;

				hash_tricks[parseInt(arr[1]) + count + ""] = hash;
			}

			count += increment;
			num++;
		}
	}
}

function action( top )
{
	if ( top + "" in hash_tricks )
	{
		for( i in hash_tricks[top] )
		{
			for( ii in hash_tricks[top][i] )
			{
				eval( ii + "('" + i + "', " + hash_tricks[top][i][ii] + ");" );
			}
		}
	}
}

$( document ).scroll(function () 
{
	var top = $( document ).scrollTop();

	if ( span_scroll < top )
	{
		for ( var i = span_scroll; i <= top; i++ ) action( i );
	}
	else
	{
		for ( var i = span_scroll; i >= top; i-- ) action( i );
	}
	span_scroll = top;
});


/****************************************************************************************************
ユーザー定義エフェクト
****************************************************************************************************/

function alpha_up( obj, num )
{
	$( obj ).css( "filter", "alpha(opacity=" + num + ")" );
	$( obj ).css( "-moz-opacity", num / 100 );
	$( obj ).css( "opacity", num / 100 );
}
function alpha_down( obj, num )
{
	$( obj ).css( "filter", "alpha(opacity=" + ( 100 - num ) + ")" );
	$( obj ).css( "-moz-opacity", ( 100 - num ) / 100 );
	$( obj ).css( "opacity", ( 100 - num ) / 100 );
}

function right_to_left( obj, num )
{
	$( obj ).css( "margin-right", num + "%" );
}

function left_to_right( obj, num )
{
	$( obj ).css( "margin-left", num + "%" );
}
