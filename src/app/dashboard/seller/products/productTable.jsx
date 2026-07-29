import {Pagination, Table} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export function ProductTable({products}) {
    const {data, page, skip, total_page} = products

   const pages = []

   for(let i=1; i<=total_page; i++) {
    pages.push(i)
   }

  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Image</Table.Column>
            <Table.Column >Title</Table.Column>
            <Table.Column>Price</Table.Column>
            <Table.Column>quantity</Table.Column>
          </Table.Header>
          <Table.Body>
            
            {
                data.map(product => <Table.Row key={product._id}>
              <Table.Cell>
                <Image height={40} width={40} className="h-10 w-10" src={product.image} alt=""/>
              </Table.Cell>
              <Table.Cell>{product.title}</Table.Cell>
              <Table.Cell>{product.price}</Table.Cell>
              <Table.Cell>{product.quantity}</Table.Cell>
    
            </Table.Row>)
            }

        
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>

      <Table.Footer>
        <Pagination size="sm">
          <Pagination.Summary>

          </Pagination.Summary>
          <Pagination.Content>
            <Pagination.Item>
              <Pagination.Previous
              isDisabled={page===1}
              >
               <Link className="flex gap-2" href={`/dashboard/seller/products?page=${page-1}`}>
                <Pagination.PreviousIcon />
                Prev
               </Link>
              </Pagination.Previous>
            </Pagination.Item>
            {pages.map((p) => (
             <Link key={p} href={`/dashboard/seller/products?page=${p}`}>
              <Pagination.Item >
                <Pagination.Link isActive={p === page} className={`${p === page ? "bg-red-500" : ""}`}>
                  {p}
                </Pagination.Link>
              </Pagination.Item>
             </Link>
            ))}
            <Pagination.Item>
              <Pagination.Next
              isDisabled={page === total_page}
              >
                  <Link className="flex gap-2" href={`/dashboard/seller/products?page=${page+1}`}>
                Next
                </Link>
                <Pagination.NextIcon />
              </Pagination.Next>
            </Pagination.Item>
          </Pagination.Content>
        </Pagination>
      </Table.Footer>

    </Table>
  );
}