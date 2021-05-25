pragma solidity ^0.5.0;

contract NomadNft {
    // Code goes here...

    string public name = "Nomad NFT";

    // TO GO ON NOMAD NFT IF NEEDED {
    uint256 public timestamp = block.timestamp;
    // uint timestamp;
    // }

    // Store NFT's

    uint256 public nomadNftcount = 0;

    mapping(uint256 => Nft) public nfts;

    struct Nft {
        uint256 id;
        string hash;
        string title;
        string text;
        string date;
        string collectionName;
        uint256 tipAmount;
        address payable author;
    }

    event NftCreated(
        uint256 id,
        string hash,
        string title,
        string text,
        string date,
        string collectionName,
        uint256 tipAmount,
        address payable author
    );

    event NftBought(
        uint256 id,
        string hash,
        string title,
        string text,
        string date,
        string collectionName,
        uint256 tipAmount,
        address payable author
    );

    // CREATE NFT
    function uploadNft(
        string memory _nftHash,
        string memory _title,
        string memory _text,
        string memory _collectionName,
        string memory _date
    ) public {
        //ENSURE THAT NFT HASH EXISTS
        require(bytes(_nftHash).length > 0);

        // ENSURE THAT NFT DESCRIPTION EXISTS
        require(bytes(_text).length > 0);
        // ENSURE THAT NFT TITLE EXIST

        require(bytes(_title).length > 0);

        // ENSURE THAT UPLOADER ADDRESS ALREADY EXISTS
        require(msg.sender != address(0));

        // INCREMENT NFT ID
        nomadNftcount++;

        // ADD NFT TO CONTRACT
        nfts[nomadNftcount] = Nft(
            nomadNftcount,
            _nftHash,
            _title,
            _text,
            _date,
            _collectionName,
            0,
            msg.sender
        );

        // TRIGGER ON EVENT
        emit NftCreated(
            nomadNftcount,
            _nftHash,
            _title,
            _text,
            _date,
            _collectionName,
            0,
            msg.sender
        );
    }

    // PAY NFT OWNER

    function payNftOwner(uint256 _id) public payable {
        //MAKE SURE ID IS VALID
        require(_id > 0 && _id <= nomadNftcount);

        //FETCH NFT's
        Nft memory _nft = nfts[_id];

        //FETCH THE AUTHOR

        address payable _author = _nft.author;

        //PAY THE AUTHOR BY SENDING THEM ETHER

        address(_author).transfer(msg.value);

        //INCREMENT THE NFT PRICE  AMOUNT

        _nft.tipAmount = _nft.tipAmount + msg.value;

        //UPDATE THE NFT

        nfts[_id] = _nft;

        //TRIGGER AN EVENT
        emit NftBought(
            _id,
            _nft.hash,
            _nft.title,
            _nft.text,
            _nft.date,
            _nft.collectionName,
            _nft.tipAmount,
            _author
        );

        // emit ScriptureTipped(_id, hash, title, text, tipAmount, author);
    }
}
