extern crate alloy;
use alloy::transports::http::reqwest::Url;
use tower_layer::Identity;
use alloy::rpc::client::RpcClient;
use alloy::providers::{Provider as _, ProviderBuilder};

#[tokio::main(flavor = "current_thread")]
async fn main() {

    let url = Url::parse("http://127.0.0.1:8545").unwrap();
    let identity = Identity::new();
    let rpc_client = RpcClient::new(identity, true);
    let provider = ProviderBuilder::new();
    
    let provider = ProviderBuilder::new().on_http(url);

    let balance = provider.get_accounts().await;
    println!("{:?}", balance);



}
