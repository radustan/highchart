<?php 

$data = array(
	'success' => true,
	'data' => array(
			array(
				'categories' => array(
				'26 Aug 2014', '27 Aug 2014', '28 Aug 2014', '29 Aug 2014', '30 Aug 2014'
					),
				'paidTickets' => array(30, 160, 135, 148, 216),
				'freeTickets' => array(53, 0, 75, 49, 96),
				'revenue' => array(2187.05, 3198.4, 4944.9, 4426.07, 7193.04),
				'event' => 'Total'
				),
			array(
				'categories' => array(
				'26 Sep 2014', '27 Sep 2014', '28 Sep 2014', '29 Sep 2014', '30 Sep 2014'
					),
				'paidTickets' => array(14, 22, 11, 33, 44),
				'freeTickets' => array(12, 3, 44, 11, 22),
				'revenue' => array(234.05, 123.4, 143.9, 123.07, 112.04),
				'event' => 'Radu Party'
				),
			array(
				'categories' => array(
				'26 Oct 2014', '27 Oct 2014', '28 Oct 2014', '29 Oct 2014', '30 Oct 2014'
					),
				'paidTickets' => array(14, 22, 11, 33, 44),
				'freeTickets' => array(12, 3, 44, 11, 22),
				'revenue' => array(234.05, 123.4, 143.9, 123.07, 112.04),
				'event' => 'Radu Other Party'
				)
			)
	);
echo json_encode($data);

 ?>